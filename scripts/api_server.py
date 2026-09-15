import os
os.environ["OMP_NUM_THREADS"] = "1"
os.environ["OPENBLAS_NUM_THREADS"] = "1"
from fastapi import FastAPI
from pydantic import BaseModel
import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

app = FastAPI()

print("Loading AI models...")

resnet_model = models.resnet50(weights='IMAGENET1K_V1')
resnet_model = torch.nn.Sequential(*list(resnet_model.children())[:-1])
resnet_model.eval()

transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

text_model = SentenceTransformer('all-MiniLM-L6-v2')
print("Models loaded! Server ready.")

def get_image_embedding(image_path):
    img = Image.open(image_path).convert('RGB')
    img_tensor = transform(img).unsqueeze(0)
    with torch.no_grad():
        embedding = resnet_model(img_tensor)
    return embedding.squeeze().numpy()

def get_text_embedding(text):
    return text_model.encode([text])[0]

class MatchRequest(BaseModel):
    lost_image: str
    lost_description: str
    lost_category: str
    lost_color: str
    found_image: str
    found_description: str
    found_category: str
    found_color: str

@app.post("/match")
def match_items(data: MatchRequest):
    img1 = get_image_embedding(data.lost_image)
    img2 = get_image_embedding(data.found_image)
    image_score = float(cosine_similarity([img1], [img2])[0][0])

    txt1 = get_text_embedding(data.lost_description)
    txt2 = get_text_embedding(data.found_description)
    text_score = float(cosine_similarity([txt1], [txt2])[0][0])

    category_score = 1.0 if data.lost_category.lower() == data.found_category.lower() else 0.0
    color_score = 1.0 if data.lost_color.lower() == data.found_color.lower() else 0.0

    final_score = (0.35 * image_score) + (0.35 * text_score) + (0.2 * category_score) + (0.1 * color_score)

    return {
        "image_score": round(image_score, 2),
        "text_score": round(text_score, 2),
        "category_match": category_score == 1,
        "color_match": color_score == 1,
        "final_score": round(final_score, 2),
        "is_match": final_score >= 0.6
    }

@app.get("/")
def home():
    return {"message": "Lostify AI Matching Service is running!"}
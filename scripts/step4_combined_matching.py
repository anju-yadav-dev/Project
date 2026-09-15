import torch
import open_clip
from PIL import Image
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# ---------- Step A: Dono models load karo ----------
clip_model, _, preprocess = open_clip.create_model_and_transforms('ViT-B-32', pretrained='openai')
clip_model.eval()

text_model = SentenceTransformer('all-MiniLM-L6-v2')

# ---------- Step B: Image embedding nikaalne ka function ----------
def get_image_embedding(image_path):
    img = Image.open(image_path).convert('RGB')
    img_tensor = preprocess(img).unsqueeze(0)
    with torch.no_grad():
        embedding = clip_model.encode_image(img_tensor)
    return embedding.squeeze().numpy()

# ---------- Step C: Text embedding nikaalne ka function ----------
def get_text_embedding(text):
    return text_model.encode([text])[0]

# ---------- Step D: Ek "Lost" report ----------
lost_item = {
    "image": "test_images/laptop1.jpg",
    "description": "Lost my HP laptop near the library, silver color"
}

# ---------- Step E: Ek "Found" report ----------
found_item = {
    "image": "test_images/Airpod1.jpg",
    "description": "Found white wireless earbuds near the parking lot"
}

# ---------- Step F: Dono ke image aur text embeddings nikaalo ----------
lost_img_emb = get_image_embedding(lost_item["image"])
found_img_emb = get_image_embedding(found_item["image"])

lost_text_emb = get_text_embedding(lost_item["description"])
found_text_emb = get_text_embedding(found_item["description"])

# ---------- Step G: Alag-alag scores nikaalo ----------
image_score = cosine_similarity([lost_img_emb], [found_img_emb])[0][0]
text_score = cosine_similarity([lost_text_emb], [found_text_emb])[0][0]

# ---------- Step H: Final combined score (weighted average) ----------
image_weight = 0.5
text_weight = 0.5
final_score = (image_weight * image_score) + (text_weight * text_score)

# ---------- Result dikhao ----------
print("Image Similarity:", image_score)
print("Text Similarity:", text_score)
print("FINAL MATCH SCORE:", final_score)
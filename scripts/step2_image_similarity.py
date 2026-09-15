import torch
import torchvision.models as models
import torchvision.transforms as transforms
from PIL import Image
from sklearn.metrics.pairwise import cosine_similarity

# Step A: Pretrained ResNet50 model load karo
model = models.resnet50(weights='IMAGENET1K_V1')
model = torch.nn.Sequential(*list(model.children())[:-1])  # last layer hata di
model.eval()

# Step B: Image ko model ke format mein convert karne ka tarika
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
    transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225])
])

# Step C: Ek function jo image ka embedding nikale
def get_embedding(image_path):
    img = Image.open(image_path).convert('RGB')
    img_tensor = transform(img).unsqueeze(0)
    with torch.no_grad():
        embedding = model(img_tensor)
    return embedding.squeeze().numpy()

# Step D: Do images ke embeddings 
emb1 = get_embedding("test_images/Airpod1.jpg")
emb2 = get_embedding("test_images/laptop2.jpg")

# Step E: Compare karo
score = cosine_similarity([emb1], [emb2])
print("Similarity Score:", score[0][0])
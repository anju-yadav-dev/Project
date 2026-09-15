import torch
import open_clip
from PIL import Image
from sklearn.metrics.pairwise import cosine_similarity

# Step A: CLIP model load karo
model, _, preprocess = open_clip.create_model_and_transforms('ViT-B-32', pretrained='openai')
model.eval()

# Step B: Function jo image ka embedding nikale
def get_embedding(image_path):
    img = Image.open(image_path).convert('RGB')
    img_tensor = preprocess(img).unsqueeze(0)
    with torch.no_grad():
        embedding = model.encode_image(img_tensor)
    return embedding.squeeze().numpy()

# Step C: Wahi do images jo pehle test ki thi
emb1 = get_embedding("test_images/laptop1.jpg")
emb2 = get_embedding("test_images/laptop2.jpg")

# Step D: Compare karo
score = cosine_similarity([emb1], [emb2])
print("CLIP Similarity Score:", score[0][0])
import torch
import open_clip
from PIL import Image
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

print("=" * 60)
print("LOSTIFY - AI MATCHING ENGINE DEMO")
print("=" * 60)

# ---------- Models load karo ----------
print("\nLoading AI models...")
clip_model, _, preprocess = open_clip.create_model_and_transforms('ViT-B-32', pretrained='openai')
clip_model.eval()
text_model = SentenceTransformer('all-MiniLM-L6-v2')
print("Models loaded successfully!\n")

def get_image_embedding(image_path):
    img = Image.open(image_path).convert('RGB')
    img_tensor = preprocess(img).unsqueeze(0)
    with torch.no_grad():
        embedding = clip_model.encode_image(img_tensor)
    return embedding.squeeze().numpy()

def get_text_embedding(text):
    return text_model.encode([text])[0]

def calculate_match(lost_item, found_item):
    img1 = get_image_embedding(lost_item["image"])
    img2 = get_image_embedding(found_item["image"])
    image_score = cosine_similarity([img1], [img2])[0][0]

    txt1 = get_text_embedding(lost_item["description"])
    txt2 = get_text_embedding(found_item["description"])
    text_score = cosine_similarity([txt1], [txt2])[0][0]

    category_score = 1.0 if lost_item["category"].lower() == found_item["category"].lower() else 0.0
    color_score = 1.0 if lost_item["color"].lower() == found_item["color"].lower() else 0.0

    final_score = (0.35 * image_score) + (0.35 * text_score) + (0.2 * category_score) + (0.1 * color_score)

    print(f"LOST REPORT:  \"{lost_item['description']}\"")
    print(f"FOUND REPORT: \"{found_item['description']}\"")
    print(f"  Image Similarity   : {image_score:.2f}")
    print(f"  Text Similarity    : {text_score:.2f}")
    print(f"  Category Match     : {'Yes' if category_score == 1 else 'No'}")
    print(f"  Color Match        : {'Yes' if color_score == 1 else 'No'}")
    print(f"  >>> FINAL MATCH SCORE: {final_score:.2f}")
    verdict = "STRONG MATCH - Notify user!" if final_score >= 0.6 else "WEAK MATCH - Do not notify"
    print(f"  >>> VERDICT: {verdict}")
    print("-" * 60)
    return final_score

# ---------- TEST CASE 1: True Match ----------
print("\nTEST CASE 1: Genuine Match (Laptop vs Laptop)")
print("-" * 60)
lost1 = {"image": "test_images/Laptop1.jpg", "description": "Lost my HP laptop near the library, silver color", "category": "Laptop", "color": "Silver"}
found1 = {"image": "test_images/Laptop2.jpg", "description": "Found a silver laptop outside the canteen", "category": "Laptop", "color": "Silver"}
calculate_match(lost1, found1)

# ---------- TEST CASE 2: False Match ----------
print("\nTEST CASE 2: False Match (Laptop vs Earbuds)")
print("-" * 60)
lost2 = {"image": "test_images/Laptop1.jpg", "description": "Lost my HP laptop near the library, silver color", "category": "Laptop", "color": "Silver"}
found2 = {"image": "test_images/Airpod2.jpg", "description": "Found white wireless earbuds near the parking lot", "category": "Earbuds", "color": "White"}
calculate_match(lost2, found2)

print("\nDEMO COMPLETE")
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

# Model load karo
model = SentenceTransformer('all-MiniLM-L6-v2')

# Do descriptions — ek "lost" item, ek "found" item
desc1 = "Lost my black leather wallet near the library"
desc2 = "Lost my black leather wallet near the library"

# Dono ko embeddings (numbers) mein convert karo
embeddings = model.encode([desc1, desc2])

# Compare karo
score = cosine_similarity([embeddings[0]], [embeddings[1]])

print("Description 1:", desc1)
print("Description 2:", desc2)
print("Similarity Score:", score[0][0])
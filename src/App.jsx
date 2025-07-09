body {
  margin: 0;
  padding: 0;
  font-family: "Segoe UI", sans-serif;
  background-image: url("https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80");
  background-size: cover;
  background-position: center;
  color: white;
}

.app-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
}

.content {
  text-align: center;
  padding: 40px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 16px;
  max-width: 700px;
}

h1 {
  font-size: 48px;
  margin-bottom: 10px;
}

.tagline {
  font-size: 18px;
  color: #ccc;
  margin-bottom: 30px;
}

.buy-button {
  padding: 15px 30px;
  font-size: 18px;
  border: none;
  background-color: #e63946;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  margin-bottom: 30px;
  transition: background-color 0.3s ease;
}

.buy-button:hover {
  background-color: #d62828;
}

.description h2 {
  margin-bottom: 10px;
  font-size: 22px;
}

.description p {
  font-size: 16px;
  color: #ddd;
}

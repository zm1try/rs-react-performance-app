Before optimization:
-
- Commit duration: 1.7 s
- Render duration: 27.4 ms

Rendering time for components:
-
- Home: 1.8 ms
- SearchBar: 0.1 ms
- Filter: 0.1 ms
- Sort: 0.1 ms
- CountryCard: 0.1-0.3 ms

Render duration by Interactions:
-
- Search by name: 1.7 for 24.9 ms
- Filter by region: 1.8s for 4.4 ms
- Sort by population: 6.3 s for 0.8 ms
- Sort by name: 6.3 s for 0.8 ms

![Screenshot 2025-03-23 112720.png](public/Screenshot%202025-03-23%20112720.png)
![Screenshot 2025-03-23 113943.png](public/Screenshot%202025-03-23%20113943.png)

After optimization:
-
- Commit duration: 0.8 s
- Render duration: 4.7 ms

Rendering time for components:
-
- Home: 1 ms
- SearchBar: 0.1 ms
- Filter: 0.4 ms
- Sort: 0.1 ms
- CountryCard: 0.1-0.2 ms

Render duration by Interactions:
-
- Search by name: 0.8 for 4.7 ms
- Filter by region: 2.6s for 1 ms
- Sort by population: 4.1 s for 0.9 ms
- Sort by name: 5.9 s for 0.6 ms

![Screenshot 2025-03-23 114835.png](public/Screenshot%202025-03-23%20114835.png)
![Screenshot 2025-03-23 114843.png](public/Screenshot%202025-03-23%20114843.png)
# gRPC Filtering Service

Two NestJS microservices communicating via gRPC. The **Producer** reads a JSON file, filters users (age > 18), and returns the filtered list. The **Consumer** calls the Producer and logs the results.

## Project Structure

```
grpc-filtering-service/
├── proto/users.proto          # Shared gRPC schema
├── producer/                  # gRPC server — reads & filters users
├── consumer/                  # gRPC client — calls producer & logs results
├── docker-compose.yml
└── README.md
```

## Running Locally

### 1. Install dependencies

```bash
cd producer && npm install
cd ../consumer && npm install
```

### 2. Start the Producer (Terminal 1)

```bash
cd producer
npm run start
```

### 3. Start the Consumer (Terminal 2)

```bash
cd consumer
npm run start
```

The Consumer will automatically call the Producer on startup and print the filtered users to the console.

You can also manually trigger it via HTTP:
```bash
curl http://localhost:3000/users
```

## Running with Docker

```bash
docker-compose up --build
```

Both services will start. The Consumer will connect to the Producer and log the filtered users.

## Expected Output

```
Filtered Users: [
  { "id": 1, "name": "Alice", "age": 25 },
  { "id": 3, "name": "Charlie", "age": 30 },
  { "id": 5, "name": "Eve", "age": 22 },
  { "id": 7, "name": "Grace", "age": 45 }
]
```

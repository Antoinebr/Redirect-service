build:
	docker build -t antoine/redirect-service . --force-rm;

run:
	docker run -d -p 3081:8080 -it antoine/redirect-service
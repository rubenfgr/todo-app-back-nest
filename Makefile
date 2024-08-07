up:
	cd docker && docker-compose up -d
down:
	cd docker && docker-compose down
restart:
	cd docker && docker-compose restart
logs:
	cd docker && docker-compose logs -f
ps:
	cd docker && docker-compose ps
build:
	cd docker && docker-compose build
postgres:
	cd docker && docker-compose exec postgres psql -U dev -d todo
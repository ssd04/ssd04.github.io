
help:
	@echo ""

install:
	apt install hugo

run:
	hugo server

test:
	hugo server --buildDrafts

deploy:
	hugo

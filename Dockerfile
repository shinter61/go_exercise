FROM golang:1.11.2-alpine3.8 AS build

WORKDIR /go
ADD . /go

RUN apk update && \
    apk add --no-cache git

CMD ["go", "run", "main.go"]

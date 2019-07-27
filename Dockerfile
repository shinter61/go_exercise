FROM golang:1.11.2-alpine3.8 AS build

WORKDIR /go
ADD . /go

RUN apk update && \
    apk add --no-cache git && \
    go get github.com/go-sql-driver/mysql && \
    go get github.com/labstack/echo/middleware && \
    go get github.com/jinzhu/gorm

CMD ["go", "run", "main.go"]

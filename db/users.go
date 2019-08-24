package main

import (
	"../handler"
	"../model"
)

func main() {
	db := handler.GormConnect()
	defer db.Close()

	user := &model.User{}
	db.CreateTable(user)
}

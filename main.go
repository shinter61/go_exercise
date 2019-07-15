package main

import (
	"fmt"
	"github.com/labstack/echo"
	"github.com/labstack/echo/middleware"
	"./handler"
	"database/sql"
  _ "github.com/go-sql-driver/mysql"
)

func main() {
	e := echo.New()

	// Middleware
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	// Routes
	e.GET("/users", handler.ListUser)
	e.GET("/users/:id", handler.GetUser)
	e.POST("/users", handler.CreateUser)
	e.PUT("/users/:id", handler.UpdateUser)
	e.DELETE("/users/:id", handler.DeleteUser)

	// Start server
	e.Logger.Fatal(e.Start(":1323"))

	db, err := sql.Open("mysql", "docker_user:docker_user_pwd@tcp(127.0.0.1:3306)/docker_db")

	if err != nil {
		panic(err)
	}
	fmt.Println(db)
}

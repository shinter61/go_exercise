package handler

import (
	"fmt"
	"net/http"
	"github.com/labstack/echo"
	"../model"
)

func CreateUser(c echo.Context) (err error) {
	u := &model.User{
		Id : model.Seq,
	}
	fmt.Println(u)
	fmt.Println(model.Seq)
	if err := c.Bind(u); err != nil {
		return err
	}
	model.Users[u.Id] = u
	model.Seq++
	return c.JSON(http.StatusCreated, u)
}
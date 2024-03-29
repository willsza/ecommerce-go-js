package main

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
	_ "github.com/go-sql-driver/mysql"
	"github.com/willsza/ecommerce-go-js/api/internal/database"
	"github.com/willsza/ecommerce-go-js/api/internal/service"
	"github.com/willsza/ecommerce-go-js/api/internal/webserver"
)

func main() {
	db, err := sql.Open("mysql", "root:root@tcp(localhost:3306)/imersao17")

	if err != nil {
		panic(err.Error())
	}

	defer db.Close()

	categoryDB := database.NewCategoryDB(db)
	categoryService := service.NewCategoryService(*categoryDB)

	productDB := database.NewProductDB(db)
	productService := service.NewProductService(*productDB)

	webCategoryHandler := webserver.NewWebCategoryHandler(categoryService)
	webProductHandler := webserver.NewWebProductHandler(productService)

	c := chi.NewRouter()
	c.Use(middleware.Logger)
	c.Use(middleware.Recoverer)

	c.Get("/categories", webCategoryHandler.GetCategories)
	c.Get("/categories/{id}", webCategoryHandler.GetCategory)
	c.Post("/categories", webCategoryHandler.CreateCategory)

	c.Get("/products", webProductHandler.GetProducts)
	c.Get("/products/{id}", webProductHandler.GetProduct)
	c.Get("/products/category/{category}", webProductHandler.GetProductsByCategory)
	c.Post("/products", webProductHandler.CreateProduct)

	fmt.Println("Server is running on port 8080")
	http.ListenAndServe(":8080", c)
}

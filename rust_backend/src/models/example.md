```rust





use actix_web::{get, patch, post, web::Json, App, HttpResponse, HttpServer, Responder};

mod models;
use crate::models::todos::CreateTodos;
use validator::Validate;
// End points for the app to #[macro_use(





//{/*TODO: GET METHOD*/}
#[get("/todos")]
async fn get_todos() -> impl Responder {
    HttpResponse::Ok().body("Creating todos")
}

#[get("todos/history")]
async fn get_history() -> impl Responder {
    HttpResponse::Ok().body("Your History")
}

//{/*TODO: POST METHOD*/}
#[post("/save_todos")]
async fn save_todos(body: Json<CreateTodos>) -> impl Responder {
    let is_valid = body.validate();

    matches(id_valid, {
        Ok(_) => {
            let todo_name = body.todo_name.clone();
            HttpResponse::Ok().body(format!("Todo  {todo_name} is Created "));
        }
        Err(e) => HttpResponse::Ok().body(format!("Error: {}", e.to_string())),
    })
}

#[post("/archieved_todos")]
async fn archieved_todos() -> impl Responder {
    HttpResponse::Ok().body(" Your Archieved_todos")
}
//{/*TODO: PATCH METHOD*/}

#[patch("/update_todos/{uuid}")]
async fn update_todos() -> impl Responder {
    HttpResponse::Ok().body("Updating todos")
}

#[patch("/update_todos/{uuid}/at")]
async fn update_uid() -> impl Responder {
    HttpResponse::Ok().body("Updating uid")
}

// main function
#[actix_web::main]

async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            // to add endpoint here
            .service(get_todos)
            .service(update_todos)
            .service(save_todos)
            .service(update_uid)
            .service(get_history)
            .service(archieved_todos)
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
```

```

```

```

```

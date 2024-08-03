use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};

#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("Hello world!")
}

#[get("/hello")]
async fn aditya() -> impl Responder {
    HttpResponse::Ok().body("Your data is")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

// derive macros is not uesd in this route check the route section below

async fn active_todos() -> impl Responder {
    HttpResponse::Ok().body("Active_todos")
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}
#[actix_web::main]
async fn main() -> std::io::Result<()> {
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .service(aditya)
            .route("/hey", web::get().to(manual_hello))
            .route("active_todos", web::get().to(active_todos))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}

use serde::{Deserialize, Serialize};
use validator::Validate;

#[derive(Validate, Serialize, Deserialize)]

pub struct CreateTodos {
    #[validate(length(
        min = 1,
        max = 25,
        message = "Todo Title should be between 1 and 25 characters"
    ))]
    pub title: String,
}

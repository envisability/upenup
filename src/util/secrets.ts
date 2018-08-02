export const ENVIRONMENT = {
    value: process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : "development",
    IsProduction: this.value === "production",
    IsDevelopment: !this.IsProduction
};
export const SESSION_SECRET = "ashdfjhasdlkjfhalksdjhflak";
export const MONGODB_URI = "mongodb://localhost/UPenUP";
export const PORT = process.env.PORT || 3000;

export const UpworkSettings = {
    callbackURL: "http://127.0.0.1:3000/auth/upwork/callback",
    consumerKey: "EXAMPLE_CONSUMER_KEY",
    consumerSecret: "EXAMPLE_CONSUMER_SECRET"
};
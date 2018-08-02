import { Request, Response } from "express";

/**
 * GET /
 * Gets the list of all searches from the database
 */

export let getSearches = (req: Request, res: Response) => {
    res.render("searchResults", {
        title: "Search Results"
    });
};

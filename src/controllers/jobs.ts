import { Request, Response } from "express";
import { JobsService } from "../services/JobsService";

const jobsService = new JobsService();
/**
 * GET /
 * Gets the list of all jobs from the database
 */

export let listJobs = (req: Request, res: Response) => {
    const jobs = jobsService.Search()
        .then(jobs => res.render("jobs/list", { title: "Search Results", jobs: jobs }));
};

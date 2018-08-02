import bluebird from "bluebird";
const Search = require("upwork-api/lib/routers/jobs/search.js").Search;


export class JobsService {


    /**  */
    public Search(): bluebird<IUpworkJob[]> {
        return bluebird.resolve(JSON.parse(DummyJobs));
    }

}

// To parse this data:
//
//   import { Convert, IUpworkJob } from "./file";
//
//   const upworkJob = Convert.toUpworkJob(json);

export interface IUpworkJob {
    budget: number;
    category2: string;
    client: IUpworkClient;
    date_created: string;
    duration?: string; // null;
    id: string;
    job_status: string;
    job_type: string;
    skills: string[];
    snippet: string;
    subcategory2: string;
    title: string;
    url: string;
    workload: string;
}

export interface IUpworkClient {
    country?: string; // null
    feedback: number;
    jobs_posted: number;
    past_hires: number;
    payment_verification_status?: string; // null
    reviews_count: number;
}

// Converts JSON strings to/from your types
export namespace Convert {
    export function toUpworkJob(json: string): IUpworkJob {
        return JSON.parse(json);
    }

    export function upworkJobToJson(value: IUpworkJob): string {
        return JSON.stringify(value);
    }
}

//#region Dummy jobs

const DummyJobs = `
[
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    },
    {
        "budget": 750,
        "category2": "Web & Mobile Development",
        "client": {
            "country": null,
            "feedback": 0,
            "jobs_posted": 1,
            "past_hires": 0,
            "payment_verification_status": null,
            "reviews_count": 0
        },
        "date_created": "2014-06-30T23:50:17+0000",
        "duration": null,
        "id": "~aaa9992d99e35a386e",
        "job_status": "Open",
        "job_type": "Fixed",
        "skills": ["css",
            "css3",
            "database-design",
            "database-programming",
            "english",
            "html",
            "javascript",
            "mysql",
            "php",
            "python"
        ],
        "snippet": "Need a custom website <...>",
        "subcategory2": "Web Development",
        "title": "Looking for highly skilled web developer",
        "url": "http://...",
        "workload": "30+ hrs/week"
    }
]

`;

//#endregion dummy jobs
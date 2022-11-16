"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneJob = exports.allJobs = exports.defaultJobs = void 0;
const jobs_1 = require("../models/jobs");
const job_data_1 = require("../models/job-data");
const defaultJobs = (req, res, next) => {
    res.redirect('/jobs');
};
exports.defaultJobs = defaultJobs;
const allJobs = (req, res, next) => {
    res.render('all-jobs', {
        jobList: job_data_1.jobList
    });
};
exports.allJobs = allJobs;
const oneJob = (req, res, next) => {
    // get the route parameter called "name"
    let itemName = req.params.name;
    // use the find method to get the coffee item that matches the provided name
    let foundJob = job_data_1.jobList.find(jobs => {
        return jobs_1.Jobs.name === itemName;
    });
    // if the name was not found, return not found
    if (!foundJob) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        });
    }
    // render the view with the found coffee item
    res.render('coffee-detail', {
        foundJob
    });
};
exports.oneJob = oneJob;

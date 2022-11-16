"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteJob = exports.editJob = exports.editJobPage = exports.addJob = exports.addJobPage = exports.oneJob = exports.allJobs = exports.defaultJobs = void 0;
const jobs_1 = require("../models/jobs");
const defaultJobs = (req, res, next) => {
    res.redirect('/jobs');
};
exports.defaultJobs = defaultJobs;
const allJobs = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let jobList = yield jobs_1.Jobs.findAll();
    res.render('all-jobs', { jobList });
});
exports.allJobs = allJobs;
const oneJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.jobsId;
    let jobItem = yield jobs_1.Jobs.findByPk(itemId);
    if (jobItem) {
        res.render('jobs-detail', { foundJob: jobItem });
    }
    else {
        res.status(404).render('error', { message: 'Job not found' });
    }
});
exports.oneJob = oneJob;
const addJobPage = (req, res, next) => {
    res.render('add-job');
};
exports.addJobPage = addJobPage;
const addJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let newJob = req.body;
    yield jobs_1.Jobs.create(newJob);
    res.redirect('/jobs');
});
exports.addJob = addJob;
const editJobPage = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.jobsId;
    let jobItem = yield jobs_1.Jobs.findOne({
        where: { jobsId: itemId }
    });
    if (jobItem) {
        res.render('edit-job', { foundJob: jobItem });
    }
    else {
        res.status(404).render('error', { message: 'Job not found' });
    }
});
exports.editJobPage = editJobPage;
const editJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.jobsId;
    let updatedItem = req.body;
    let [updated] = yield jobs_1.Jobs.update(updatedItem, {
        where: { jobsId: itemId }
    });
    if (updated === 1) {
        res.redirect('/jobs');
    }
    else {
        res.render('error', { message: 'Job could not be updated' });
    }
});
exports.editJob = editJob;
const deleteJob = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let itemId = req.params.jobsId;
    let deleted = yield jobs_1.Jobs.destroy({
        where: { jobsId: itemId }
    });
    if (deleted) {
        res.redirect('/jobs');
    }
    else {
        res.status(404).render('error', { message: 'Cannot find item' });
    }
});
exports.deleteJob = deleteJob;

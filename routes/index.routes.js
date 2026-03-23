const express = require('express');
const router = express.Router();



router.get('/index', (req, res) => {
    res.render("index");
})
router.get('/student_load', (req, res) => {
    res.render("student_load");
})
router.get('/student_login', (req, res) => {
    res.render("student_login");
})
router.get('/student_panel', (req, res) => {
    res.render("student_panel");
})
router.get('/profile', (req, res) => {
    res.render("profile");
})
router.get('/admit_card', (req, res) => {
    res.render("admit_card");
})
router.get('/alumni_connect', (req, res) => {
    res.render("alumni_connect");
})
router.get('/alumni_details1', (req, res) => {
    res.render("alumni_details1");
})
router.get('/assignments', (req, res) => {
    res.render("assignments");
})
router.get('/attendance', (req, res) => {
    res.render("attendance");
})
router.get('/chatbot', (req, res) => {
    res.render("chatbot");
})
router.get('/course', (req, res) => {
    res.render("course");
})
router.get('/college_info', (req, res) => {
    res.render("college_info");
})
router.get('/examination_seating_plan', (req, res) => {
    res.render("examination_seating_plan");
})
router.get('/fee_undertaking', (req, res) => {
    res.render("fee_undertaking");
})
router.get('/feedback', (req, res) => {
    res.render("feedback");
})
router.get('/fees', (req, res) => {
    res.render("fees");
})
router.get('/library_books', (req, res) => {
    res.render("library_books");
})
router.get('/lms', (req, res) => {
    res.render("lms");
})
router.get('/mentor_mentee', (req, res) => {
    res.render("mentor_mentee");
})
router.get('/mentor_mentee', (req, res) => {
    res.render("mentor_mentee");
})
router.get('/mentor_video_call', (req, res) => {
    res.render("mentor_video_call");
})
router.get('/message_registrar', (req, res) => {
    res.render("message_registrar");
})
router.get('/my_report_card', (req, res) => {
    res.render("my_report_card");
})
router.get('/notification', (req, res) => {
    res.render("notification");
})
router.get('/placement_coordinator', (req, res) => {
    res.render("placement_coordinator");
})
router.get('/teacher_video_call', (req, res) => {
    res.render("teacher_video_call");
})
router.get('/timetable', (req, res) => {
    res.render("timetable");
})
router.get('/video_calling', (req, res) => {
    res.render("video_calling");
})
router.get('/logout', (req, res) => {
    res.render("logout");
})
router.get('/signup', (req, res) => {
    res.render("signup");
})
















router.get('/teacher_load', (req, res) => {
    res.render("teacher_load");
})
router.get('/teacher_login', (req, res) => {
    res.render("teacher_login");
})
router.get('/teacher_panel', (req, res) => {
    res.render("teacher_panel");
})
router.get('/T_attendance', (req, res) => {
    res.render("T_attendance");
})
router.get('/T_exam_management', (req, res) => {
    res.render("T_exam_management");
})
router.get('/T_grading', (req, res) => {
    res.render("T_grading");
})
router.get('/T_meeting', (req, res) => {
    res.render("T_meeting");
})
router.get('/T_mentor', (req, res) => {
    res.render("T_mentor");
})
router.get('/T_messages', (req, res) => {
    res.render("T_messages");
})
router.get('/T_messaging', (req, res) => {
    res.render("T_messaging");
})
router.get('/T_notification', (req, res) => {
    res.render("T_notification");
})
router.get('/T_performance_reports', (req, res) => {
    res.render("T_performance_reports");
})
router.get('/T_profile', (req, res) => {
    res.render("T_profile");
})
router.get('/T_timetable', (req, res) => {
    res.render("T_timetable");
})




module.exports = router;

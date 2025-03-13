import courses from './course.js';
import { getCurrentYear, getLastModified } from './date.js';

// Function to render courses dynamically
const renderCourses = (filter = null) => {
    const courseList = document.getElementById("course-list");
    const creditTotal = document.getElementById("credit-total");
    courseList.innerHTML = ""; // Clear the course list for re-rendering

    const filteredCourses = filter
        ? courses.filter(course => course.subject === filter)
        : courses;

    const totalCredits = filteredCourses.reduce((total, course) => total + course.credits, 0);

    filteredCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.className = "course-item";
        courseDiv.textContent = `${course.subject} ${course.number}: ${course.title}`;
        courseDiv.style.textDecoration = course.completed ? "line-through" : "none"; // Mark completed courses
        courseList.appendChild(courseDiv);
    });

    creditTotal.textContent = `Total Credits: ${totalCredits}`;
};

// Event listeners for filtering courses
const initializeFilters = () => {
    document.getElementById("filter-all").addEventListener("click", () => renderCourses());
    document.getElementById("filter-cse").addEventListener("click", () => renderCourses("CSE"));
    document.getElementById("filter-wdd").addEventListener("click", () => renderCourses("WDD"));
};

// Update the footer with the current year and last modified date
const updateFooter = () => {
    document.getElementById("year").textContent = getCurrentYear();
    document.getElementById("last-modified").textContent = getLastModified();
};

// Hamburger Menu Functionality
const initializeHamburgerMenu = () => {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const menu = document.getElementById("menu");

    hamburgerMenu.addEventListener("click", () => {
        menu.classList.toggle("hidden");
        menu.classList.toggle("visible");
    });
};

// Initialize the page functionality on DOM load
document.addEventListener("DOMContentLoaded", () => {
    renderCourses(); // Render all courses by default
    initializeFilters(); // Initialize filter buttons
    updateFooter(); // Update the footer with dynamic information
    initializeHamburgerMenu(); // Initialize hamburger menu functionality
});

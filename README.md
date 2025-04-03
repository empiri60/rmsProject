# 🚀 Cypress Automation Test Suite

[![Cypress Version](https://img.shields.io/badge/Cypress-14.2.1-brightgreen)](https://www.cypress.io/)
[![Chrome Version](https://img.shields.io/badge/Chrome-134-blue)](https://www.google.com/chrome/)
[![Node Version](https://img.shields.io/badge/Node.js-22.14.0-blue)](https://nodejs.org/)
[![Test Coverage](https://img.shields.io/badge/Test%20Coverage-4%20Specs-orange)]()

Professional test automation framework for web applications using Cypress 14 with Chrome 134.

## 🌟 Features

- **Modern Testing Stack**: Cypress 14 + Node.js 22
- **Comprehensive Test Coverage**:
  - Authentication (Login/Signup)
  - Product Management
  - API Testing
- **Headless Execution**: Chrome 134 in CI/CD pipelines
- **Best Practices**:
  - Page Object Model architecture
  - Custom commands
  - Environment configuration

## 📦 Prerequisites

- Node.js v22.14.0
- npm v10+
- Chrome 134 or compatible browser

## 🏗️ Project Structure

```text
cypress/
├── e2e/
│   ├── Login.cy.js
│   ├── SignUp.cy.js
│   ├── ProductListing.cy.js
│   └── books-api.cy.js
├── fixtures/
├── pageObjects/
├── support/
├── videos/
└── screenshots/


## 📊 Reporting

- Automatic video recordings for failed tests
- Screenshots on test failures
- Console output with detailed execution logs

## 🛠️ Installation

```bash
git clone https://github.com/empiri60/rmsProject.git
npm install

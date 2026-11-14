# Frappe Vehicle Log Importer

A browser extension designed to simplify importing vehicle log records from Excel spreadsheets into Frappe/ERPNext applications.

The extension helps identify ERP form fields, map Excel columns to ERP fields, validate vehicle information, and prepare vehicle log records for importing.

> **Project status: Experimental**
>
> This project is under development. Excel parsing and ERP field detection have been demonstrated, but complete automated importing and record verification still require testing against the target ERP configuration.

## Features

- **Excel workbook reading:** Select and process `.xlsx` workbooks locally in the browser.
- **ERP field detection:** Inspect the active Frappe form and identify available DocType fields.
- **Automatic field mapping:** Identify potential matches between spreadsheet columns and ERP fields.
- **Child table detection:** Detect service-detail tables and their associated fields.
- **Data validation:** Check required values and identify potential data-quality issues.
- **Import preparation:** Prepare vehicle log records for a controlled import workflow.
- **Audit reporting:** Export validation and import information as CSV.
- **Browser-based workflow:** Operate through a browser extension without manually copying spreadsheet values into individual fields.

## Technology

- JavaScript
- HTML5
- CSS3
- Chrome Extension Manifest V3
- Frappe / ERPNext
- Excel `.xlsx` workbook processing

## Installation

### Requirements

- Google Chrome or Microsoft Edge
- Access to a Frappe/ERPNext application
- Permission to access the relevant ERP DocTypes
- An Excel workbook containing vehicle log data

### Install from source

1. Download or clone this repository.
2. Extract the project folder if downloaded as a ZIP.
3. Open Chrome and navigate to `chrome://extensions/`, or Edge and navigate to `edge://extensions/`.
4. Enable **Developer mode**.
5. Click **Load unpacked**.
6. Select the project directory containing `manifest.json`.
7. Confirm that the extension appears in your installed extensions.
8. Open your Frappe/ERPNext Vehicle Log form.
9. Open the extension from the browser toolbar.

## Usage

1. Open the Vehicle Log form in your ERP.
2. Open the Vehicle Log Importer extension.
3. Select your Excel workbook.
4. Run workbook validation.
5. Run ERP field detection.
6. Review the proposed Excel-to-ERP field mappings.
7. Investigate all validation warnings.
8. Test with a single record before attempting a larger import.
9. Review the resulting ERP record and audit report.

**Important:** Do not import the complete workbook until field mappings, Link fields, child tables, and record verification have been tested in your ERP environment.

## Example ERP fields

The target Vehicle Log form may contain fields such as:

| ERP field | Purpose |
|---|---|
| Employee | Employee reference |
| Employee Name | Employee display name |
| License Plate | Vehicle registration |
| Plate No. | Vehicle plate reference |
| Date | Vehicle log date |
| Current Odometer Value | Current odometer reading |
| Fuel Qty | Fuel quantity |
| Fuel Price | Fuel expense |
| Supplier | Fuel supplier |
| Service Details | Service child table |

Example service-detail fields detected in one test environment:

- `service_detail`
- `service_item`
- `type`
- `frequency`
- `expense_amount`

These are examples from a particular ERP configuration. Your fieldnames may differ.

## Data privacy and security

- Spreadsheet data should be processed locally in the browser where supported.
- Do not publish employee information, vehicle registration data, private ERP URLs, passwords, API keys, session cookies, or production spreadsheets.
- Use a test ERP environment whenever possible.
- Review browser extension permissions before installation.
- Do not enable automatic submission without appropriate testing and authorization.

## Limitations

- ERP customizations can change fieldnames and field types.
- Link fields may require valid ERP record references.
- Child tables require correct parent-child field mapping.
- Automatic field detection may produce incorrect matches.
- The extension has not been verified against every Frappe/ERPNext version or customization.
- Full automated importing and read-back verification remain experimental until tested in the target environment.

## Contributing

Contributions, bug reports, and improvements are welcome.

When submitting an issue, include:

- Browser and version
- Frappe/ERPNext version
- Relevant error message
- Sanitized ERP field metadata
- Steps to reproduce the issue

Never include credentials or confidential company data.

## License

This project is released under the Apache License 2.0, subject to the repository owner's confirmation that the included code and dependencies can be distributed under this license.

See `LICENSE` for details.

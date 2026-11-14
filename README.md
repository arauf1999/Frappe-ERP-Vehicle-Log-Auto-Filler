# Vehicle Log Auto Import Assistant (draft-only)

## What it does
- Reads `.xlsx` locally in the extension popup (no external SheetJS dependency).
- Groups the Vehicle Log worksheet into vehicle records with service-detail child rows.
- Inspects the currently open Frappe form and its metadata to infer the DocType, parent fields, and service child table.
- Imports a selected pilot size as **drafts only**, then reads each saved record back to verify the document name, license plate, and child-row count.
- Exports an audit CSV.

## Install
1. Extract the ZIP to a normal folder.
2. Open `edge://extensions/` (or `chrome://extensions/`).
3. Enable Developer mode.
4. Click **Load unpacked** and select the extracted `Vehicle_Log_AutoImport_Extension` folder containing `manifest.json`.
5. Open your ERP in another tab, navigate to a blank New Vehicle Log form, and reload that ERP page.
6. Open the extension, choose the workbook, click **Preview & validate workbook**, then **Auto-detect ERP fields**.
7. Check the detected DocType and child table. Start with **1 record** and click **Import pilot as drafts + verify**.
8. Inspect the created draft in ERP and export the audit CSV before increasing the pilot size.

## Safety and limits
- This extension does **not submit** any documents; it creates draft records only.
- Field mapping is heuristic, not guaranteed. It refuses to create records if it cannot confidently identify key parent fields or a likely service table. Other required/custom fields or Link-field rules can still cause ERP validation errors.
- It relies on Frappe's client-side `frappe.call` and metadata being available on the active ERP page, and on your signed-in account having permission to create/read the DocType.
- Use only on a test/staging site first. Verify all fields, especially Make/Model, Employee, dates, fuel details, and service rows, before importing more records. Do not blindly import all 282 records.
- No passwords or session tokens are collected or stored. Calls run within the currently open authenticated ERP page.

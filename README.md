# intro-to-gemini

In this talk, I quickly walk through the basics of Google Gemini. We then play with AI Studio to test Gemini using a pre-built UI. Finally, we create our own web service using Project IDX as our IDE and then deploy it to Google Cloud Run using Google Cloud Build.

## Gemini References

[Visit the cookbook](https://goo.gle/cookbook)

[Open Google AI Studio](https://aistudio.google.com)

[Open the docs](https://ai.google.dev/docs)

[Join Discord](https://ai.google.dev/docs/discord)

[Prompt Best Practices](https://ai.google.dev/docs/prompt_best_practices)

[Function Calling Live Example](https://goo.gle/gemini-fn-call-sql)

[Tuning Quickstart](https://ai.google.dev/tutorials/tuning_quickstart_python)

## Other References

[Project IDX](https://idx.google.com/)

[Project IDX Community](https://community.idx.dev/)

[Google Cloud Build](https://cloud.google.com/build/docs)

[Google Cloud Run](https://cloud.google.com/run)

## Steps to Walkthrough the demo

### Testing a GET Operation

1. Open [Project IDX](https://idx.google.com/)
2. Click the Import a repo button
3. Paste the URL of this repo (or your forked instance of it)
4. Open the Terminal in your IDX
5. run ``npm install``
6. Get your AI Studio API key (see slide 17)
7. Create a new file at the root of the project named **.env**
8. Add a new line to the file as follows ``API_KEY=[YOUR_KEY_GOES_HERE]``
9. Hard Restart the IDX Preview window from its refresh icon menu
10. Test a GET on your web service by passing in a **prompt** URL parameter

### Testing a POST Operation

1. Open the Command Pallet and choose: **Project IDX: Generate Access Token**
2. Open the Terminal in IDX
3. Enter ``export ACCESS_TOKEN=[YOUR_ACCESS_TOKEN]``
4. If you don't know your port, click on the Output view in the Panel and select IDX in the dropdown
5. In the Terminal enter ``curl -H "Content-Type: application/json" -H "Authorization: Bearer $ACCESS_TOKEN" -d '{ "model": "gemini-1.5-pro", "prompt": "What is the capital of Nevada"}' -X POST https://9002-$WEB_HOST``



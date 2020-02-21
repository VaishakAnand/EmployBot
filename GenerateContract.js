
var formData;
var EmployerName;
var EmployeeName;
var Job;
var SalaryAmt;
var SalaryDur;
var Benefits;
var SalaryDate;
var SalaryPayment;
var Termination;

function generatePDF(){
    
    var doc = new jsPDF();

    doc.setFontSize(15);
    doc.setFontStyle("bold");
    doc.text("Employment Contract", 80, 25);

    doc.setFontSize(12);
    doc.setFont("helvetica");
    doc.setFontStyle("normal");
    doc.text("Employer Name: " + String(EmployerName), 25, 40);
    doc.text("Employee Name: " + String(EmployeeName), 25, 46);

    doc.text("Job Title: " + String(Job), 25, 58);

    doc.text("Salary Amount: " + String(SalaryAmt) + " " + String(SalaryDur), 25, 70);
    doc.text("Salary Payment Date: " + String(SalaryDate), 25, 76);
    doc.text("Salary Payment Type: " + String(SalaryPayment), 25, 82);

    if(Benefits != "") {
        doc.text("Other Employment Benefits: " + String(Benefits), 25, 94);
    } else {
        doc.text("Other Employment Benefits: NIL", 25, 94);
    }

    doc.text("Either party can terminate this agreement with a written notice of " + String(Termination) + " or by paying", 25, 106);
    doc.text("salary in lieu of notice for the relevant period.", 25, 112);

    doc.text("The employer may not deduct any monies from the employee’s wage other than those ", 25, 124);
    doc.text("allowed under the Employment Act or ordered by the Court.", 25, 130);
    
    doc.text("Signed: ", 25, 170);
    

    doc.text("Employer: ", 25, 198);     doc.text("Employee: ", 130, 198);
    doc.text("Date: ", 25, 204);     doc.text("Date: ", 130, 204);

    
    doc.save("Employment_Contract.pdf");
}
// 0: {name: "EmployerName", value: "Vaishak"}
// 1: {name: "EmployeeName", value: "Anand"}
// 2: {name: "Job", value: "WSwd"}
// 3: {name: "SalaryAmt", value: "11"}
// 4: {name: "SalaryDur", value: "per Hour"}
// 5: {name: "Benefits", value: ""}
// 6: {name: "SalaryDate", value: "1st"}
// 7: {name: "SalaryPayment", value: "Cash"}
// 8: {name: "Termination", value: "1 Day"}
$(function() {
    var update = function() {
        formData = $('form').serializeArray();
        EmployerName = formData[0]["value"];
        EmployeeName = formData[1]["value"];
        Job = formData[2]["value"];
        SalaryAmt = formData[3]["value"];
        SalaryDur = formData[4]["value"];
        Benefits = formData[5]["value"];
        SalaryDate = formData[6]["value"];
        SalaryPayment = formData[7]["value"];
        Termination = formData[8]["value"];
    };

    $('form').change(update);

    

    document.getElementById("download").addEventListener("click", generatePDF);
})


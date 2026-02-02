import { useState } from "react";

const diseases = [
    "Acute Liver Failure",
    "Alcohol Induced Liver Diseases",
    "Appendicitis",
    "Autoimmune Hepatitis (AIH)",
    "Bowel disease – an overview",
    "Canker Sores (Mouth Ulcers)",
    "Colon Cancer",
    "Constipation",
    "Diarrhoea",
    "Drug induced Liver Injury",
    "Dysphagia",
    "Gallstones",
    "Gastroesophageal Reflux Disease (GERD)",
    "H. Pylori",
    "Hepatic Artery Embolisation",
    "Hepatic Encephalopathy",
    "Hepatitis",
    "Hepatitis A",
    "Hepatitis B",
    "Hepatitis C",
    "Intrahepatic Cholangiocarcinoma",
    "Jaundice",
    "Liver Cirrhosis",
    "Liver Masses",
    "Liver problem, Liver disease – an overview",
    "NAFLD (Nonalcoholic Fatty Liver Disease)",
    "Pancreatitis",
    "Pelvic Floor Biofeedback-1",
    "Pelvic Floor Biofeedback-2",
    "Peptic ulcer disease (PUD)",
    "Piles",
    "Perihilar and Distal Cholangiocarcinoma",
    "Portal Hypertension",
    "Primary Biliary Cirrhosis",
    "Stomach Cancer / Gastric Cancer",
    "Stomach Pain / Abdominal Pain",
    "Suppository Giving",
    "Swallowing Exercise",
    "Ulcerative Colitis",
    "Wilson’s Disease"
];

export default function DiseaseSidebarLayout() {
  const [active, setActive] = useState(diseases[0]);

  return (
  <div className="flex flex-col md:flex-row px-4 md:px-10 py-6 md:py-10 min-h-screen bg-gray-50">
    
    {/* Left Sidebar */}
    <aside className="w-full md:w-80 bg-[#132a4a] text-white 
                      flex md:block overflow-x-auto md:overflow-visible">
      {diseases.map((item) => (
        <button
          key={item}
          onClick={() => setActive(item)}
          className={`flex-shrink-0 md:w-full text-left px-5 py-3 border-b md:border-b border-[#3b5b88] transition
            ${active === item ? "bg-blue-900 font-semibold" : "hover:bg-[#49668d]"}`}
        >
          {item}
        </button>
      ))}
    </aside>

    {/* Right Content */}
    <main className="flex-1 p-4 md:p-8">
      <h1 className="text-xl md:text-2xl font-bold text-blue-900 mb-4">
        {active}
      </h1>

      <div className="bg-white rounded-2xl shadow p-4 md:p-6 text-gray-700 leading-relaxed">
        <p>
          This section displays detailed information about{" "}
          <strong>{active}</strong>. You can replace this text with a dedicated
          component, API data, or rich medical content such as symptoms, causes,
          diagnosis, and treatment options.
        </p>
      </div>
    </main>

  </div>
);

}

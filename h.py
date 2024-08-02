from fpdf import FPDF

# Create instance of FPDF class
pdf = FPDF()

# Add a page
pdf.add_page()

# Set font
pdf.set_font("Arial", size = 12)

# Personal Mission Statement
pdf.cell(200, 10, txt = "Personal Mission Statement", ln = True, align = 'C')

pdf.cell(200, 10, txt = "Step 1: PICS (Primary Interests, Core Values, Goals)", ln = True)
pdf.multi_cell(0, 10, txt = """
Primary Interests:
- Technology and innovation
- Personal development and coaching
- Sustainable living

Core Values:
- Integrity
- Continuous learning
- Empathy

Goals:
- To become a leader in the tech industry
- To mentor and coach others in personal and professional development
- To promote and practice sustainable living
""")

pdf.cell(200, 10, txt = "Step 2: Personal Mission Statement", ln = True)
pdf.multi_cell(0, 10, txt = """
My mission is to lead with integrity and empathy, continuously learn and innovate in the tech industry, and mentor others to achieve their personal and professional goals while promoting sustainable living practices.
""")

# Add a page for Skills Map
pdf.add_page()

# Updated Skills Map
pdf.cell(200, 10, txt = "Updated Skills Map", ln = True, align = 'C')
pdf.multi_cell(0, 10, txt = """
Current Skills:
- Technical: Programming (Python, JavaScript), Data Analysis, Web Development
- Non-technical: Project Management, Communication, Problem-solving

Newly Acquired/Improved Skills:
- Technical: Machine Learning basics, Cloud Computing (AWS)
- Non-technical: Leadership, Peer Coaching
""")

# Add a page for Peer Coaching Reflection
pdf.add_page()

# Peer Coaching Reflection
pdf.cell(200, 10, txt = "Peer Coaching Reflection", ln = True, align = 'C')
pdf.multi_cell(0, 10, txt = """
Key Points Discussed:
- The importance of setting clear and achievable goals
- Techniques for effective time management and productivity
- Strategies for continuous personal and professional growth

Feedback Received:
- Focus on improving public speaking skills to enhance leadership potential
- Prioritize tasks based on impact and urgency to manage workload better

Actions Planned:
- Enroll in a public speaking course
- Implement a priority matrix to manage daily tasks
""")

# Save the pdf with name .pdf
file_path = "/mnt/data/Week_2_Milestone.pdf"
pdf.output(file_path)

file_path

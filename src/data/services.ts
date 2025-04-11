import {
  Mail,
  Calendar,
  HeadphonesIcon,
  Calculator,
  FileText,
  ClipboardList,
  Instagram,
  UserRound
} from 'lucide-react';
import { ServiceItem } from '../types/serviceTypes';

const servicesData: ServiceItem[] = [
  {
    id: 'virtual-assistant',
    title: 'Virtual Assistant Support',
    shortDescription: 'Comprehensive email, calendar and task management',
    description: 'Our Virtual Assistant Support service provides dedicated administrative professionals to handle your day-to-day tasks, freeing you to focus on core business activities.',
    icon: Mail,
    features: [
      {
        title: 'Email Management',
        description: 'Inbox organization, filtering important messages, drafting responses, and managing follow-ups to ensure nothing falls through the cracks.'
      },
      {
        title: 'Calendar Organization',
        description: 'Scheduling appointments, managing meeting requests, sending reminders, and coordinating your professional calendar efficiently.'
      },
      {
        title: 'Personal Task Management',
        description: 'Handling personal administrative tasks, creating to-do lists, and ensuring deadlines are met across your various responsibilities.'
      },
      {
        title: 'Travel Arrangements',
        description: 'Booking flights, accommodations, and transportation while creating detailed itineraries for business trips.'
      },
      {
        title: 'Meeting Coordination',
        description: 'Setting up in-person and virtual meetings, preparing agendas, and handling all logistics for smooth operations.'
      },
      {
        title: 'Basic Research',
        description: 'Conducting preliminary research on topics, companies, or individuals to support your decision-making process.'
      }
    ],
    benefits: [
      'Save 5-10 hours weekly on administrative tasks',
      'Never miss important emails or appointments',
      'Reduced stress from managing multiple responsibilities',
      'Improved work-life balance with professional support',
      'Seamless coordination of your professional schedule',
      'Flexibility to scale support up or down as needed'
    ],
    imageSrc: '/benjamin-child-0sT9YhNgSEs-unsplash.jpg'
  },
  {
    id: 'customer-service',
    title: 'Customer Service Management',
    shortDescription: 'Professional client interaction and relationship management',
    description: 'Our Customer Service Management solution provides skilled professionals to handle client inquiries, manage CRM systems, and ensure excellent customer experiences.',
    icon: HeadphonesIcon,
    features: [
      {
        title: 'Inquiry Response',
        description: 'Timely and professional responses to customer inquiries via email, chat, or social media platforms to maintain high satisfaction rates.'
      },
      {
        title: 'CRM Management',
        description: 'Comprehensive management of customer relationship management systems, ensuring data accuracy and up-to-date customer records.'
      },
      {
        title: 'Client Onboarding',
        description: 'Structured onboarding processes for new clients, including welcome materials, account setup, and initial communications.'
      },
      {
        title: 'Customer Feedback Collection',
        description: 'Gathering, organizing, and analyzing customer feedback to identify areas for improvement in your products or services.'
      },
      {
        title: 'Support Ticket Management',
        description: 'Handling support tickets efficiently, ensuring timely resolution and appropriate follow-up for customer issues.'
      },
      {
        title: 'Client Relationship Building',
        description: 'Proactive communication with clients to build stronger relationships and increase retention rates.'
      }
    ],
    benefits: [
      'Improved customer satisfaction and retention',
      'Consistent brand voice across all customer interactions',
      'Reduced response time for customer inquiries',
      'Better organized customer data and insights',
      'Cost-effective alternative to in-house customer service team',
      'Scalable solution that grows with your business'
    ],
    imageSrc: '/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg'
  },
  {
    id: 'bookkeeping',
    title: 'Bookkeeping & Financial Assistance',
    shortDescription: 'Professional financial management and reporting',
    description: 'Our Bookkeeping & Financial Assistance services provide reliable support for managing your financial tasks, from invoicing to expense tracking and financial reporting.',
    icon: Calculator,
    features: [
      {
        title: 'Invoicing & Billing',
        description: 'Creating and sending professional invoices, tracking payments, and following up on overdue accounts to maintain healthy cash flow.'
      },
      {
        title: 'Expense Tracking',
        description: 'Organizing receipts, categorizing expenses, and maintaining detailed records for budgeting and tax purposes.'
      },
      {
        title: 'Financial Reporting',
        description: 'Generating regular financial reports, including profit and loss statements, to provide clear insights into your business performance.'
      },
      {
        title: 'Payment Processing',
        description: 'Managing incoming and outgoing payments, reconciling accounts, and ensuring timely transactions.'
      },
      {
        title: 'Basic Accounts Reconciliation',
        description: 'Regular reconciliation of accounts to ensure accuracy and identify any discrepancies in financial records.'
      },
      {
        title: 'Budget Management',
        description: 'Assisting with budget creation, tracking actual spending against budgets, and providing recommendations for financial efficiency.'
      }
    ],
    benefits: [
      'Improved financial organization and accuracy',
      'Significant time savings on financial administrative tasks',
      'Better cash flow management with timely invoicing',
      'Reduced errors in financial record-keeping',
      'Regular financial insights through comprehensive reporting',
      'Preparation support for tax filing and audits'
    ],
    imageSrc: '/luke-chesser-wnShDP37vB4-unsplash.jpg'
  },
  {
    id: 'admin-data-entry',
    title: 'Administrative & Data Entry Services',
    shortDescription: 'Efficient document management and data processing',
    description: 'Our Administrative & Data Entry Services provide meticulous attention to detail for document handling, database management, and data processing tasks.',
    icon: FileText,
    features: [
      {
        title: 'Document Formatting',
        description: 'Professional formatting of documents, reports, presentations, and other business materials to ensure consistency and polish.'
      },
      {
        title: 'File Organization',
        description: 'Creating and maintaining logical file structures, naming conventions, and archiving systems for easy retrieval of information.'
      },
      {
        title: 'Database Management',
        description: 'Updating and maintaining databases with accurate information, ensuring data integrity and accessibility.'
      },
      {
        title: 'Spreadsheet Creation',
        description: 'Developing comprehensive spreadsheets with formulas, formatting, and data visualization for better business insights.'
      },
      {
        title: 'Data Processing',
        description: 'Converting raw data into structured, usable information through cleaning, sorting, and organizing processes.'
      },
      {
        title: 'Transcription Services',
        description: 'Transcribing audio recordings of meetings, interviews, or dictations into accurate written documents.'
      }
    ],
    benefits: [
      'Reduced administrative burden on core team members',
      'Improved data accuracy and consistency',
      'Enhanced document organization and retrievability',
      'Faster processing of information and data entry tasks',
      'Standardized formats across business documents',
      'Ability to focus on strategic activities instead of administrative tasks'
    ],
    imageSrc: '/brian-wangenheim-ohLMHYT25Y0-unsplash.jpg'
  },
  {
    id: 'project-coordination',
    title: 'Project & Task Coordination',
    shortDescription: 'Streamlined project management and workflow organization',
    description: 'Our Project & Task Coordination service ensures your projects stay on track with professional management of timelines, tasks, and team communication.',
    icon: ClipboardList,
    features: [
      {
        title: 'Task Tracking',
        description: 'Setting up and maintaining project management tools like Trello, Asana, or ClickUp to track tasks, deadlines, and progress.'
      },
      {
        title: 'Deadline Management',
        description: 'Monitoring project timelines, sending reminders, and ensuring tasks are completed on schedule to maintain project momentum.'
      },
      {
        title: 'Meeting Coordination',
        description: 'Organizing project meetings, preparing agendas, taking notes, and distributing action items to keep everyone aligned.'
      },
      {
        title: 'Progress Reporting',
        description: 'Creating regular progress reports for stakeholders, highlighting accomplishments, challenges, and next steps.'
      },
      {
        title: 'Resource Allocation',
        description: 'Helping assign tasks based on team capacity and skill sets to optimize project workflows and efficiency.'
      },
      {
        title: 'Documentation Management',
        description: 'Organizing project documentation, ensuring version control, and maintaining a centralized repository of project assets.'
      }
    ],
    benefits: [
      'Improved project organization and visibility',
      'Reduced likelihood of missed deadlines',
      'Better team coordination and communication',
      'Consistent project documentation and reporting',
      'Increased efficiency in project execution',
      'Ability to manage multiple projects simultaneously'
    ],
    imageSrc: '/adolfo-felix-PG8NyM_Mcts-unsplash.jpg'
  },
  {
    id: 'digital-presence',
    title: 'Digital Presence Management',
    shortDescription: 'Cohesive online brand representation and monitoring',
    description: 'Our Digital Presence Management service helps maintain a consistent and professional online presence across social media platforms and digital channels.',
    icon: Instagram,
    features: [
      {
        title: 'Social Media Scheduling',
        description: 'Planning and scheduling social media content across platforms to maintain consistent posting schedules and audience engagement.'
      },
      {
        title: 'Online Reputation Monitoring',
        description: 'Tracking mentions of your brand online, monitoring reviews, and alerting you to any issues that require attention.'
      },
      {
        title: 'Content Curation',
        description: 'Finding and sharing relevant industry content to enhance your social media presence and demonstrate thought leadership.'
      },
      {
        title: 'Basic Analytics Reporting',
        description: 'Gathering and interpreting basic social media metrics to provide insights on performance and audience engagement.'
      },
      {
        title: 'Profile Management',
        description: 'Ensuring all online business profiles are complete, accurate, and consistently branded across platforms.'
      },
      {
        title: 'Digital Asset Organization',
        description: 'Organizing digital marketing assets, including images, videos, and graphics for easy access and usage.'
      }
    ],
    benefits: [
      'Consistent online brand presence and messaging',
      'Time savings through scheduled content',
      'Early awareness of any online reputation issues',
      'Improved engagement with your target audience',
      'Professional management of digital assets',
      'Data-driven insights for marketing strategy'
    ],
    imageSrc: '/raj-rana-zCQsBI7ZltQ-unsplash.jpg'
  },
  {
    id: 'hr-admin',
    title: 'HR Admin Support',
    shortDescription: 'Streamlined human resources administrative processes',
    description: 'Our HR Admin Support service provides professional assistance with recruitment coordination, onboarding paperwork, and essential HR administrative functions.',
    icon: UserRound,
    features: [
      {
        title: 'Recruitment Coordination',
        description: 'Managing interview scheduling, candidate communication, and coordination of the recruitment process from application to offer.'
      },
      {
        title: 'Onboarding Management',
        description: 'Preparing and processing new hire paperwork, creating onboarding schedules, and ensuring a smooth transition for new team members.'
      },
      {
        title: 'Timesheet Administration',
        description: 'Managing employee time tracking, processing timesheets, and maintaining accurate records for payroll purposes.'
      },
      {
        title: 'Leave Tracking',
        description: 'Maintaining employee leave records, processing time-off requests, and ensuring appropriate coverage during absences.'
      },
      {
        title: 'HR Documentation',
        description: 'Organizing and maintaining employee files, HR policies, and other essential human resources documentation.'
      },
      {
        title: 'Benefits Administration Support',
        description: 'Assisting with employee benefits enrollment, answering basic questions, and coordinating with benefits providers.'
      }
    ],
    benefits: [
      'Streamlined recruitment and onboarding processes',
      'Improved HR record-keeping and organization',
      'Reduced administrative burden on managers',
      'Consistent application of HR policies and procedures',
      'Professional coordination of HR-related communications',
      'Cost-effective alternative to full-time HR staff'
    ],
    imageSrc: '/nastuh-abootalebi-yWwob8kwOCk-unsplash.jpg'
  }
];

export default servicesData; 
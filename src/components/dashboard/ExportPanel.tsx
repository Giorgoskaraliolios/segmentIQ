import { useState } from 'react'
import { Segment } from '../../types'
import { Download, FileText, Mail, Share2, CheckCircle2 } from 'lucide-react'

interface Props {
  segment: Segment
}

const ExportPanel = ({ segment }: Props) => {
  const [exportFormat, setExportFormat] = useState<string>('')
  const [exported, setExported] = useState(false)

  const handleExport = (format: string) => {
    setExportFormat(format)
    setExported(true)

    // Generate export data based on format
    let exportData = ''
    let filename = ''

    switch (format) {
      case 'csv':
        // CSV format
        exportData = 'ID,Name,Email,Age,Income,Purchase Frequency,Avg Order Value,LTV,Location\n'
        segment.customers.forEach((c) => {
          exportData += `${c.id},"${c.name}",${c.email},${c.age},${c.income},${c.purchaseFrequency},${c.avgOrderValue},${c.lifetimeValue},"${c.location}"\n`
        })
        filename = `${segment.name.replace(/\s+/g, '_')}_customers.csv`
        break

      case 'facebook':
        // Facebook Custom Audience format (emails)
        exportData = segment.customers.map((c) => c.email).join('\n')
        filename = `${segment.name.replace(/\s+/g, '_')}_facebook_audience.txt`
        break

      case 'email':
        // Email campaign format
        exportData = 'Email,First Name,LTV,Last Purchase\n'
        segment.customers.forEach((c) => {
          const [firstName] = c.name.split(' ')
          exportData += `${c.email},"${firstName}",${c.lifetimeValue},${c.recency}\n`
        })
        filename = `${segment.name.replace(/\s+/g, '_')}_email_list.csv`
        break

      case 'salesforce':
        // Salesforce format
        exportData = 'Email,Full Name,Segment,LTV,Engagement Score,State\n'
        segment.customers.forEach((c) => {
          exportData += `${c.email},"${c.name}","${segment.name}",${c.lifetimeValue},${c.engagement},"${c.state}"\n`
        })
        filename = `${segment.name.replace(/\s+/g, '_')}_salesforce.csv`
        break
    }

    // Trigger download
    const blob = new Blob([exportData], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)

    setTimeout(() => {
      setExported(false)
    }, 3000)
  }

  const exportOptions = [
    {
      id: 'csv',
      name: 'CSV Export',
      description: 'Download complete customer list with all attributes',
      icon: <FileText className="h-5 w-5" />,
    },
    {
      id: 'facebook',
      name: 'Facebook Custom Audience',
      description: 'Email list formatted for Facebook Ads',
      icon: <Share2 className="h-5 w-5" />,
    },
    {
      id: 'email',
      name: 'Email Campaign List',
      description: 'Formatted for email marketing platforms',
      icon: <Mail className="h-5 w-5" />,
    },
    {
      id: 'salesforce',
      name: 'Salesforce CRM',
      description: 'CRM-ready format with segment tags',
      icon: <Download className="h-5 w-5" />,
    },
  ]

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center mb-4">
        <Download className="h-6 w-6 text-primary mr-2" />
        <h3 className="text-xl font-bold text-gray-900">Export Segment</h3>
      </div>
      <p className="text-gray-600 mb-6">
        Export <span className="font-semibold">{segment.customerCount} customers</span> from{' '}
        <span className="font-semibold">{segment.name}</span>
      </p>

      <div className="space-y-3">
        {exportOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => handleExport(option.id)}
            className="w-full flex items-start p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-primary-50 transition-all text-left group"
          >
            <div className="text-primary mr-3 mt-1">{option.icon}</div>
            <div className="flex-1">
              <div className="font-semibold text-gray-900 group-hover:text-primary">
                {option.name}
              </div>
              <div className="text-sm text-gray-600">{option.description}</div>
            </div>
            {exported && exportFormat === option.id && (
              <CheckCircle2 className="h-5 w-5 text-green-600 ml-2" />
            )}
          </button>
        ))}
      </div>

      {exported && (
        <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
          <div className="flex items-center text-green-800">
            <CheckCircle2 className="h-5 w-5 mr-2" />
            <span className="text-sm font-medium">Export successful! File downloaded.</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default ExportPanel

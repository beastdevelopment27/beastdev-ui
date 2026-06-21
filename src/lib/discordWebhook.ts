interface ContactFormPayload {
  name: string
  email: string
  company?: string
  projectType: string
  budget?: string
  message: string
}

function copyable(value: string): string {
  const trimmed = value.trim()
  const escaped = trimmed.replace(/```/g, "'''")
  return `\`\`\`\n${escaped}\n\`\`\``
}

function field(name: string, value: string) {
  const formatted = copyable(value)
  return {
    name,
    value: formatted.length > 1024 ? formatted.slice(0, 1021) + '...' : formatted,
    inline: false,
  }
}

export async function sendContactFormToDiscord(data: ContactFormPayload) {
  const webhookUrl = import.meta.env.VITE_DISCORD_WEBHOOK_URL

  if (!webhookUrl) {
    throw new Error('Discord webhook URL is not configured.')
  }

  const fields = [
    field('Name', data.name),
    field('Email', data.email),
    ...(data.company ? [field('Company', data.company)] : []),
    field('Project Type', data.projectType),
    ...(data.budget ? [field('Budget', data.budget)] : []),
    field('Message', data.message),
  ]

  const response = await fetch(webhookUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      embeds: [
        {
          title: 'New Contact Form',
          color: 0x5865f2,
          fields,
          timestamp: new Date().toISOString(),
        },
      ],
    }),
  })

  if (!response.ok) {
    throw new Error('Failed to send message to Discord.')
  }
}

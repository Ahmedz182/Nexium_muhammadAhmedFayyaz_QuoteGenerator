"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { quotes, Quote } from "@/data/quotes"
import { Quote as QuoteIcon, RefreshCw, Search } from "lucide-react"

export default function QuoteGenerator() {
  const [topic, setTopic] = useState("")
  const [displayedQuotes, setDisplayedQuotes] = useState<Quote[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const getQuotesByTopic = (searchTopic: string): Quote[] => {
    if (!searchTopic.trim()) {
      // Return 3 random quotes if no topic is specified
      const shuffled = [...quotes].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 3)
    }

    // Filter quotes by category or content that matches the topic
    const filtered = quotes.filter(quote => 
      quote.category.toLowerCase().includes(searchTopic.toLowerCase()) ||
      quote.text.toLowerCase().includes(searchTopic.toLowerCase()) ||
      quote.author.toLowerCase().includes(searchTopic.toLowerCase())
    )

    // If we have matches, return up to 3
    if (filtered.length > 0) {
      const shuffled = [...filtered].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, 3)
    }

    // If no matches, return 3 random quotes
    const shuffled = [...quotes].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, 3)
  }

  const handleGenerateQuotes = async () => {
    setIsLoading(true)
    
    // Simulate API call delay for better UX
    await new Promise(resolve => setTimeout(resolve, 800))
    
    const newQuotes = getQuotesByTopic(topic)
    setDisplayedQuotes(newQuotes)
    setIsLoading(false)
  }

  const handleRandomQuotes = async () => {
    setIsLoading(true)
    setTopic("")
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 600))
    
    const randomQuotes = getQuotesByTopic("")
    setDisplayedQuotes(randomQuotes)
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-red-400/15 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-8 pt-8">
          <div className="backdrop-blur-md bg-white/5 rounded-3xl p-8 border border-red-500/30 shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="p-3 rounded-full bg-red-500/30 backdrop-blur-sm mr-4">
                <QuoteIcon className="h-8 w-8 text-red-300 drop-shadow-lg" />
              </div>
              <h1 className="text-4xl font-bold text-white drop-shadow-lg">Quote Generator</h1>
            </div>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto drop-shadow-md">
              Discover inspiring quotes by topic or get random wisdom to brighten your day
            </p>
          </div>
        </div>

        {/* Input Form */}
        <Card className="mb-8 backdrop-blur-md bg-white/5 border-red-500/30 shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-center text-white drop-shadow-lg">Find Your Inspiration</CardTitle>
            <CardDescription className="text-center text-gray-300">
              Enter a topic like &ldquo;success&rdquo;, &ldquo;motivation&rdquo;, &ldquo;life&rdquo;, or leave blank for random quotes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-sm font-medium text-gray-200">
                Topic (optional)
              </Label>
              <Input
                id="topic"
                type="text"
                placeholder="e.g., success, motivation, happiness..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="text-lg py-3 backdrop-blur-sm bg-white/10 border-red-500/30 text-white placeholder:text-gray-400 focus:bg-white/20 transition-all duration-300 focus:border-red-400"
                onKeyPress={(e) => e.key === 'Enter' && handleGenerateQuotes()}
              />
            </div>
            <div className="flex gap-3 justify-center">
              <Button 
                onClick={handleGenerateQuotes}
                disabled={isLoading}
                className="flex items-center gap-2 px-6 py-3 bg-red-600/80 hover:bg-red-500/90 backdrop-blur-sm border-red-500/40 text-white shadow-lg transition-all duration-300 hover:scale-105"
                size="lg"
              >
                {isLoading ? (
                  <RefreshCw className="h-4 w-4 animate-spin" />
                ) : (
                  <Search className="h-4 w-4" />
                )}
                {isLoading ? 'Generating...' : 'Generate Quotes'}
              </Button>
              <Button 
                onClick={handleRandomQuotes}
                disabled={isLoading}
                variant="outline"
                className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border-red-500/30 text-white shadow-lg transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <RefreshCw className="h-4 w-4" />
                Random Quotes
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Quote Display */}
        {displayedQuotes.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-center text-white mb-6">
              {topic ? `Quotes about "${topic}"` : 'Random Inspirational Quotes'}
            </h2>
            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
              {displayedQuotes.map((quote, index) => (
                <Card 
                  key={quote.id} 
                  className="transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl backdrop-blur-md bg-white/5 border-red-500/30"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <CardContent className="p-8">
                    <div className="text-center space-y-4">
                      <QuoteIcon className="h-6 w-6 text-red-400 mx-auto opacity-60" />
                      <blockquote className="text-xl md:text-2xl font-medium text-white leading-relaxed">
                        &ldquo;{quote.text}&rdquo;
                      </blockquote>
                      <div className="pt-4 border-t border-red-500/30">
                        <cite className="text-lg font-semibold text-red-400">
                          — {quote.author}
                        </cite>
                        <div className="text-sm text-gray-400 mt-1 capitalize">
                          Category: {quote.category}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Welcome Message */}
        {displayedQuotes.length === 0 && !isLoading && (
          <Card className="text-center py-12 backdrop-blur-md bg-white/5 border-red-500/30 border-dashed border-2">
            <CardContent>
              <QuoteIcon className="h-16 w-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">
                Ready to Get Inspired?
              </h3>
              <p className="text-gray-300">
                Enter a topic above or click &ldquo;Random Quotes&rdquo; to start discovering amazing quotes!
              </p>
            </CardContent>
          </Card>
        )}

        {/* Footer */}
        <footer className="text-center py-8 mt-16">
          <div className="backdrop-blur-md bg-white/5 rounded-2xl p-6 border border-red-500/30">
            <div className="space-y-2">
              <p className="font-medium text-red-400">Built by Muhammad Ahmed Fyyaz</p>
              <p className="text-sm text-gray-400">Built with Next.js and ShadCN UI</p>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}

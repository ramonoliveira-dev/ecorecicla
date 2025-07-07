import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Recycle, Leaf, Lightbulb, Globe, ArrowRight, CheckCircle, Users, TreePine } from 'lucide-react'
import './App.css'

// Componente Header
function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Recycle className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">EcoRecicla</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary transition-colors">Início</a>
            <a href="#guide" className="text-gray-700 hover:text-primary transition-colors">Guia de Reciclagem</a>
            <a href="#reuse" className="text-gray-700 hover:text-primary transition-colors">Reutilização</a>
            <a href="#special" className="text-gray-700 hover:text-primary transition-colors">Materiais Especiais</a>
            <a href="#about" className="text-gray-700 hover:text-primary transition-colors">Sustentabilidade</a>
          </nav>
        </div>
      </div>
    </header>
  )
}

// Componente Hero Section
function HeroSection() {
  return (
    <section id="home" className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Aprenda a <span className="text-primary">Reciclar</span> e 
            <br />Transforme o <span className="text-accent">Mundo</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra práticas corretas de reciclagem, dicas de reutilização e como fazer a diferença 
            para o meio ambiente. Juntos, podemos construir um futuro mais sustentável.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Começar Agora <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Saiba Mais
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente de Cards de Destaque
function FeatureCards() {
  const features = [
    {
      icon: <Recycle className="h-12 w-12 text-primary" />,
      title: "Guia de Reciclagem",
      description: "Aprenda como separar e descartar corretamente diferentes tipos de materiais recicláveis.",
      link: "#guide"
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-accent" />,
      title: "Dicas de Reutilização",
      description: "Descubra maneiras criativas de dar nova vida aos materiais antes de descartá-los.",
      link: "#reuse"
    },
    {
      icon: <Globe className="h-12 w-12 text-blue-600" />,
      title: "Materiais Especiais",
      description: "Saiba como descartar lixo eletrônico, pilhas, baterias e outros materiais específicos.",
      link: "#special"
    },
    {
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      title: "Sustentabilidade",
      description: "Entenda a importância da conscientização ambiental e os benefícios da reciclagem.",
      link: "#about"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tudo que Você Precisa Saber
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore nossos guias completos e torne-se um especialista em práticas sustentáveis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 mb-4">
                  {feature.description}
                </CardDescription>
                <Button variant="outline" className="w-full">
                  Explorar <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente de Estatísticas
function StatsSection() {
  const stats = [
    { number: "1 tonelada", label: "de papel reciclado salva 17 árvores", icon: <TreePine className="h-8 w-8" /> },
    { number: "95%", label: "menos energia para reciclar alumínio", icon: <Recycle className="h-8 w-8" /> },
    { number: "2.000 litros", label: "de água economizados por tonelada de papel", icon: <Globe className="h-8 w-8" /> },
    { number: "1 milhão", label: "de pessoas podem fazer a diferença", icon: <Users className="h-8 w-8" /> }
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O Impacto da Reciclagem
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Pequenas ações geram grandes resultados para o meio ambiente
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 opacity-80">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-lg opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente de Guia de Reciclagem
function RecyclingGuide() {
  const materials = [
    {
      type: "Papel",
      color: "bg-blue-100 text-blue-800",
      items: ["Jornais", "Revistas", "Papelão", "Caixas"],
      tips: "Mantenha limpo e seco. Remova grampos e fitas adesivas."
    },
    {
      type: "Plástico",
      color: "bg-red-100 text-red-800",
      items: ["Garrafas PET", "Potes", "Sacolas", "Embalagens"],
      tips: "Lave e seque antes do descarte. Verifique o símbolo de reciclagem."
    },
    {
      type: "Vidro",
      color: "bg-green-100 text-green-800",
      items: ["Garrafas", "Potes", "Frascos"],
      tips: "Remova tampas e rótulos. Cuidado com vidros quebrados."
    },
    {
      type: "Metal",
      color: "bg-yellow-100 text-yellow-800",
      items: ["Latas de alumínio", "Latas de aço", "Tampas"],
      tips: "Lave e amasse para economizar espaço."
    }
  ]

  return (
    <section id="guide" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Guia de Reciclagem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Aprenda a separar corretamente os materiais recicláveis
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {materials.map((material, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-xl">{material.type}</CardTitle>
                  <Badge className={material.color}>{material.type}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Exemplos:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {material.items.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-semibold mb-2">Dica:</h4>
                  <p className="text-sm text-gray-600">{material.tips}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

// Componente Footer
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Recycle className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">EcoRecicla</span>
            </div>
            <p className="text-gray-400">
              Educando para um futuro mais sustentável através de práticas corretas de reciclagem.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Navegação</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Início</a></li>
              <li><a href="#guide" className="hover:text-white transition-colors">Guia de Reciclagem</a></li>
              <li><a href="#reuse" className="hover:text-white transition-colors">Reutilização</a></li>
              <li><a href="#special" className="hover:text-white transition-colors">Materiais Especiais</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Dicas Práticas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pontos de Coleta</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Calculadora de Impacto</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quiz Educativo</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p className="text-gray-400 mb-2">
              Tem dúvidas sobre reciclagem?
            </p>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900">
              Entre em Contato
            </Button>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 EcoRecicla. Todos os direitos reservados. Feito com ❤️ para o meio ambiente.</p>
        </div>
      </div>
    </footer>
  )
}

// Componente Principal
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeatureCards />
      <StatsSection />
      <RecyclingGuide />
      <Footer />
    </div>
  )
}

export default App


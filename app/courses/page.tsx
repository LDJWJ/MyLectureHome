"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  CheckCircle,
  Clock,
  GraduationCap,
  ArrowLeft,
  User,
  Star,
  Calendar,
  Bot,
  Database,
  Code,
  Cpu,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <GraduationCap className="h-6 w-6" />
            <span>✨ 예영 EDU</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/#about" className="text-sm font-medium hover:text-primary">
              예영 EDU 소개
            </Link>
            <Link href="/courses" className="text-sm font-medium text-primary">
              교육 커리큘럼 소개
            </Link>
            <Link href="/case-studies" className="text-sm font-medium hover:text-primary">
              고객 사례
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              협업&출강문의
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              로그인
            </Button>
            <Link href="/contact">
            <Button>교육 문의하기</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <Link
                href="/"
                className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                메인 페이지로 돌아가기
              </Link>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  교육 커리큘럼 소개
                </span>
              </h1>
              <p className="max-w-[700px] text-lg text-slate-700 md:text-xl">
                초보자부터 전문가까지, 모든 수준에 맞는 체계적인 교육 과정을 제공합니다. 실무에 바로 적용할 수 있는
                실용적인 커리큘럼으로 구성되어 있습니다.
              </p>
            </div>

            <Tabs defaultValue="ai" className="mt-8">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="ai" className="flex items-center gap-2">
                  <Bot className="h-4 w-4" />
                  <span className="hidden sm:inline">AI/머신러닝</span>
                  <span className="sm:hidden">AI</span>
                </TabsTrigger>
                <TabsTrigger value="data" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  <span className="hidden sm:inline">데이터 분석</span>
                  <span className="sm:hidden">데이터</span>
                </TabsTrigger>
                <TabsTrigger value="programming" className="flex items-center gap-2">
                  <Code className="h-4 w-4" />
                  <span className="hidden sm:inline">프로그래밍</span>
                  <span className="sm:hidden">코딩</span>
                </TabsTrigger>
                <TabsTrigger value="advanced" className="flex items-center gap-2">
                  <Cpu className="h-4 w-4" />
                  <span className="hidden sm:inline">고급 AI 응용</span>
                  <span className="sm:hidden">고급</span>
                </TabsTrigger>
              </TabsList>

              {/* AI/머신러닝 탭 */}
              <TabsContent value="ai" className="space-y-12">
                {/* AI 과정 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image src="/online-learning-setup.png" alt="AI 기초 과정" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">인기 강의</Badge>
                    </div>
                    <div className="p-8 md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">AI와 머신러닝 기초</h2>
                      <p className="text-slate-600 mb-6">
                        AI와 머신러닝의 기본 개념부터 실제 적용까지 배우는 입문자를 위한 과정입니다. 이론적 배경과 함께
                        실습을 통해 기초를 탄탄히 다질 수 있습니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">8주 과정</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">24개 강의</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">초급자 대상</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Star className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">평점 4.9/5</span>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-lg font-medium">상세 커리큘럼</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  week: "1주차",
                                  title: "AI와 머신러닝 소개",
                                  description: "인공지능과 머신러닝의 역사, 기본 개념, 활용 분야에 대해 알아봅니다.",
                                  topics: [
                                    "AI의 역사와 발전",
                                    "머신러닝의 기본 개념",
                                    "지도학습과 비지도학습",
                                    "강화학습 소개",
                                  ],
                                },
                                {
                                  week: "2주차",
                                  title: "파이썬 기초 및 데이터 처리",
                                  description: "머신러닝을 위한 파이썬 기초와 데이터 처리 방법을 배웁니다.",
                                  topics: [
                                    "파이썬 기본 문법",
                                    "NumPy와 Pandas 기초",
                                    "데이터 전처리 기법",
                                    "데이터 시각화",
                                  ],
                                },
                                {
                                  week: "3주차",
                                  title: "지도학습과 비지도학습",
                                  description: "지도학습과 비지도학습의 차이점과 활용 방법을 배웁니다.",
                                  topics: [
                                    "지도학습 알고리즘 소개",
                                    "비지도학습 알고리즘 소개",
                                    "군집화와 차원 축소",
                                    "실습: 간단한 분류 모델 구현",
                                  ],
                                },
                                {
                                  week: "4주차",
                                  title: "회귀 분석 기초",
                                  description: "선형 회귀와 로지스틱 회귀 등 기본적인 회귀 분석 방법을 배웁니다.",
                                  topics: [
                                    "선형 회귀 이론",
                                    "다중 선형 회귀",
                                    "로지스틱 회귀",
                                    "실습: 회귀 모델 구현 및 평가",
                                  ],
                                },
                                {
                                  week: "5주차",
                                  title: "분류 알고리즘 이해하기",
                                  description: "다양한 분류 알고리즘의 원리와 활용 방법을 배웁니다.",
                                  topics: [
                                    "결정 트리",
                                    "랜덤 포레스트",
                                    "서포트 벡터 머신",
                                    "실습: 분류 모델 구현 및 평가",
                                  ],
                                },
                                {
                                  week: "6주차",
                                  title: "신경망 기초",
                                  description: "인공 신경망의 기본 구조와 작동 원리를 배웁니다.",
                                  topics: [
                                    "퍼셉트론과 다층 신경망",
                                    "활성화 함수",
                                    "역전파 알고리즘",
                                    "실습: 간단한 신경망 구현",
                                  ],
                                },
                                {
                                  week: "7주차",
                                  title: "실전 프로젝트: 이미지 분류",
                                  description: "배운 내용을 바탕으로 이미지 분류 프로젝트를 진행합니다.",
                                  topics: ["이미지 데이터 전처리", "CNN 기초", "전이 학습", "모델 평가 및 개선"],
                                },
                                {
                                  week: "8주차",
                                  title: "실전 프로젝트: 텍스트 분석",
                                  description: "텍스트 데이터를 분석하고 처리하는 방법을 배웁니다.",
                                  topics: ["텍스트 전처리", "워드 임베딩", "감성 분석", "최종 프로젝트 발표"],
                                },
                              ].map((week, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <span className="font-semibold text-blue-600">{week.week}</span>
                                      <h4 className="text-lg font-medium">{week.title}</h4>
                                    </div>
                                    <Badge variant="outline">{index + 1}/8</Badge>
                                  </div>
                                  <p className="text-slate-600 mb-3">{week.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {week.topics.map((topic, i) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="instructor">
                          <AccordionTrigger className="text-lg font-medium">강사 소개</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col md:flex-row gap-6 mt-4">
                              <div className="relative w-32 h-32 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
                                <Image
                                  src="/placeholder.svg?key=zyqbu"
                                  alt="강사 이미지"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold mb-2">김예영 강사</h4>
                                <p className="text-slate-600 mb-4">
                                  10년 이상의 AI 및 머신러닝 분야 경력을 가진 전문가입니다. 다양한 기업과 대학에서 강의
                                  경험이 있으며, 실무 중심의 교육으로 호평을 받고 있습니다.
                                </p>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-600" />
                                    <span>AI 관련 저서 출판</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-600" />
                                    <span>국내외 AI 프로젝트 다수 참여</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-600" />
                                    <span>1000명 이상 교육 경험</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="reviews">
                          <AccordionTrigger className="text-lg font-medium">수강생 후기</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  name: "이OO",
                                  rating: 5,
                                  comment:
                                    "AI에 대한 기초 지식이 전혀 없었는데, 이 강의를 통해 기본 개념부터 실제 적용까지 체계적으로 배울 수 있었습니다. 특히 실습 위주의 교육 방식이 매우 도움이 되었습니다.",
                                  date: "2025.04.15",
                                },
                                {
                                  name: "박OO",
                                  rating: 5,
                                  comment:
                                    "강사님의 설명이 매우 명확하고 이해하기 쉬웠습니다. 복잡한 개념도 쉽게 풀어서 설명해주셔서 좋았습니다. 실무에 바로 적용할 수 있는 내용이 많아 만족스러웠습니다.",
                                  date: "2025.03.22",
                                },
                                {
                                  name: "김OO",
                                  rating: 4,
                                  comment:
                                    "전반적으로 만족스러운 강의였습니다. 다만 초반부는 조금 기초적인 내용이 많아 지루했지만, 후반부로 갈수록 실용적인 내용이 많아져서 좋았습니다.",
                                  date: "2025.02.10",
                                },
                              ].map((review, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                  <div className="flex justify-between items-center mb-2">
                                    <div className="font-semibold">{review.name}</div>
                                    <div className="flex items-center">
                                      {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                          key={i}
                                          className={`h-4 w-4 ${
                                            i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                                          }`}
                                        />
                                      ))}
                                    </div>
                                  </div>
                                  <p className="text-slate-600 mb-2">{review.comment}</p>
                                  <div className="text-sm text-slate-400">{review.date}</div>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                          수강 신청하기
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          커리큘럼 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI 과정 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image src="/online-learning-setup.png" alt="딥러닝 기초와 응용" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      <Badge className="absolute top-4 left-4 bg-blue-600 text-white">신규 강의</Badge>
                    </div>
                    <div className="p-8 md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">딥러닝 기초와 응용</h2>
                      <p className="text-slate-600 mb-6">
                        딥러닝의 핵심 개념과 다양한 신경망 모델을 배우고 실습하는 과정입니다. 최신 딥러닝 기술과
                        프레임워크를 활용하여 실전 프로젝트를 수행합니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">10주 과정</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">30개 강의</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">중급자 대상</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">5월 개강</span>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-lg font-medium">상세 커리큘럼</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  week: "1주차",
                                  title: "딥러닝 개요 및 역사",
                                  description: "딥러닝의 역사와 발전 과정, 기본 개념에 대해 알아봅니다.",
                                  topics: [
                                    "딥러닝의 역사",
                                    "머신러닝과 딥러닝의 차이",
                                    "딥러닝의 주요 응용 분야",
                                    "딥러닝 프레임워크 소개",
                                  ],
                                },
                                {
                                  week: "2주차",
                                  title: "신경망 구조와 활성화 함수",
                                  description: "인공 신경망의 구조와 다양한 활성화 함수에 대해 배웁니다.",
                                  topics: [
                                    "인공 신경망의 구조",
                                    "활성화 함수의 종류와 특징",
                                    "가중치와 편향",
                                    "손실 함수",
                                  ],
                                },
                                {
                                  week: "3주차",
                                  title: "역전파 알고리즘 이해하기",
                                  description: "신경망 학습의 핵심인 역전파 알고리즘에 대해 배웁니다.",
                                  topics: ["경사 하강법", "역전파 알고리즘 원리", "최적화 알고리즘", "과적합과 정규화"],
                                },
                              ].map((week, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <span className="font-semibold text-blue-600">{week.week}</span>
                                      <h4 className="text-lg font-medium">{week.title}</h4>
                                    </div>
                                    <Badge variant="outline">{index + 1}/10</Badge>
                                  </div>
                                  <p className="text-slate-600 mb-3">{week.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {week.topics.map((topic, i) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <div className="text-center">
                                <Button variant="link">전체 커리큘럼 보기</Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                          수강 신청하기
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          커리큘럼 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI 과정 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image
                        src="/online-learning-setup.png"
                        alt="생성형 AI 마스터 과정"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">인기 강의</Badge>
                    </div>
                    <div className="p-8 md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">생성형 AI 마스터 과정</h2>
                      <p className="text-slate-600 mb-6">
                        ChatGPT, DALL-E, Stable Diffusion 등 최신 생성형 AI 기술을 배우고 활용하는 과정입니다. 실무에
                        바로 적용할 수 있는 프롬프트 엔지니어링 기법과 API 활용법을 배웁니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">6주 과정</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">18개 강의</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">모든 수준</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Star className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">평점 4.8/5</span>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-lg font-medium">상세 커리큘럼</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  week: "1주차",
                                  title: "생성형 AI 개요 및 발전 과정",
                                  description: "생성형 AI의 역사와 발전 과정, 주요 모델에 대해 알아봅니다.",
                                  topics: [
                                    "생성형 AI의 역사",
                                    "주요 생성형 AI 모델",
                                    "생성형 AI의 응용 분야",
                                    "윤리적 고려사항",
                                  ],
                                },
                                {
                                  week: "2주차",
                                  title: "대규모 언어 모델(LLM) 이해하기",
                                  description: "GPT, LLaMA 등 대규모 언어 모델의 원리와 특징을 배웁니다.",
                                  topics: ["트랜스포머 아키텍처", "자기회귀 모델", "토큰화와 임베딩", "파인튜닝과 RAG"],
                                },
                                {
                                  week: "3주차",
                                  title: "ChatGPT와 GPT 시리즈 활용법",
                                  description: "ChatGPT와 GPT 시리즈 모델의 활용 방법을 배웁니다.",
                                  topics: [
                                    "ChatGPT 기본 사용법",
                                    "OpenAI API 활용",
                                    "GPT-4의 특징과 활용",
                                    "실습: 챗봇 만들기",
                                  ],
                                },
                              ].map((week, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <span className="font-semibold text-blue-600">{week.week}</span>
                                      <h4 className="text-lg font-medium">{week.title}</h4>
                                    </div>
                                    <Badge variant="outline">{index + 1}/6</Badge>
                                  </div>
                                  <p className="text-slate-600 mb-3">{week.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {week.topics.map((topic, i) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <div className="text-center">
                                <Button variant="link">전체 커리큘럼 보기</Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                          수강 신청하기
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          커리큘럼 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 데이터 분석 탭 */}
              <TabsContent value="data" className="space-y-12">
                {/* 데이터 분석 과정 1 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image src="/online-learning-setup.png" alt="데이터 분석 기초" fill className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white">기초 과정</Badge>
                    </div>
                    <div className="p-8 md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">데이터 분석 기초</h2>
                      <p className="text-slate-600 mb-6">
                        파이썬을 활용한 데이터 분석의 기초부터 시각화까지 배우는 입문 과정입니다. 데이터 분석에 필요한
                        핵심 라이브러리와 도구 사용법을 배웁니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">6주 과정</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">18개 강의</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">초급자 대상</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Star className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">평점 4.7/5</span>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-lg font-medium">상세 커리큘럼</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  week: "1주차",
                                  title: "데이터 분석 개요",
                                  description: "데이터 분석의 기본 개념과 프로세스에 대해 알아봅니다.",
                                  topics: [
                                    "데이터 분석의 중요성",
                                    "데이터 분석 프로세스",
                                    "데이터 유형과 특성",
                                    "데이터 분석 도구 소개",
                                  ],
                                },
                                {
                                  week: "2주차",
                                  title: "파이썬 기초 및 환경 설정",
                                  description: "데이터 분석을 위한 파이썬 기초와 개발 환경 설정 방법을 배웁니다.",
                                  topics: [
                                    "파이썬 기본 문법",
                                    "Anaconda 설치 및 환경 설정",
                                    "Jupyter Notebook 사용법",
                                    "기본 데이터 구조",
                                  ],
                                },
                                {
                                  week: "3주차",
                                  title: "NumPy 기초",
                                  description: "수치 계산을 위한 NumPy 라이브러리의 기초를 배웁니다.",
                                  topics: [
                                    "NumPy 배열 생성 및 조작",
                                    "배열 인덱싱과 슬라이싱",
                                    "벡터화 연산",
                                    "통계 함수",
                                  ],
                                },
                              ].map((week, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <span className="font-semibold text-blue-600">{week.week}</span>
                                      <h4 className="text-lg font-medium">{week.title}</h4>
                                    </div>
                                    <Badge variant="outline">{index + 1}/6</Badge>
                                  </div>
                                  <p className="text-slate-600 mb-3">{week.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {week.topics.map((topic, i) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <div className="text-center">
                                <Button variant="link">전체 커리큘럼 보기</Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="instructor">
                          <AccordionTrigger className="text-lg font-medium">강사 소개</AccordionTrigger>
                          <AccordionContent>
                            <div className="flex flex-col md:flex-row gap-6 mt-4">
                              <div className="relative w-32 h-32 rounded-full overflow-hidden shrink-0 mx-auto md:mx-0">
                                <Image
                                  src="/placeholder.svg?key=zyqbu"
                                  alt="강사 이미지"
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="text-xl font-bold mb-2">김예영 강사</h4>
                                <p className="text-slate-600 mb-4">
                                  데이터 분석 및 시각화 전문가로, 다양한 기업의 데이터 분석 프로젝트를 수행했습니다.
                                  초보자도 쉽게 이해할 수 있는 강의 스타일로 호평을 받고 있습니다.
                                </p>
                                <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-600" />
                                    <span>데이터 분석 관련 저서 출판</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-600" />
                                    <span>기업 데이터 분석 컨설팅 다수 수행</span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <CheckCircle className="h-4 w-4 text-blue-600" />
                                    <span>500명 이상 교육 경험</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                          수강 신청하기
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          커리큘럼 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 데이터 분석 과정 2 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image
                        src="/online-learning-setup.png"
                        alt="통계 분석과 데이터 사이언스"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      <Badge className="absolute top-4 left-4 bg-yellow-600 text-white">중급 과정</Badge>
                    </div>
                    <div className="p-8 md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">통계 분석과 데이터 사이언스</h2>
                      <p className="text-slate-600 mb-6">
                        통계적 방법론을 활용한 데이터 분석과 의사결정 방법을 배우는 과정입니다. 실제 비즈니스 문제
                        해결을 위한 통계 모델링 기법을 배웁니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">8주 과정</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">24개 강의</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">중급자 대상</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">6월 개강</span>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-lg font-medium">상세 커리큘럼</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  week: "1주차",
                                  title: "확률과 통계 기초",
                                  description: "데이터 분석을 위한 확률과 통계의 기본 개념을 배웁니다.",
                                  topics: ["확률 이론", "확률 분포", "기술통계", "추론통계 개요"],
                                },
                                {
                                  week: "2주차",
                                  title: "기술통계와 추론통계",
                                  description: "데이터를 요약하고 분석하는 통계적 방법을 배웁니다.",
                                  topics: ["중심 경향성과 분산", "분포 형태와 이상치", "신뢰구간", "표본 추출 방법"],
                                },
                                {
                                  week: "3주차",
                                  title: "가설검정과 p-value",
                                  description: "통계적 가설검정의 원리와 방법을 배웁니다.",
                                  topics: ["귀무가설과 대립가설", "유의수준과 p-value", "t-검정과 z-검정", "ANOVA"],
                                },
                              ].map((week, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <span className="font-semibold text-blue-600">{week.week}</span>
                                      <h4 className="text-lg font-medium">{week.title}</h4>
                                    </div>
                                    <Badge variant="outline">{index + 1}/8</Badge>
                                  </div>
                                  <p className="text-slate-600 mb-3">{week.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {week.topics.map((topic, i) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <div className="text-center">
                                <Button variant="link">전체 커리큘럼 보기</Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                          수강 신청하기
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          커리큘럼 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 데이터 분석 과정 3 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image
                        src="/online-learning-setup.png"
                        alt="빅데이터 분석과 시각화"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">고급 과정</Badge>
                    </div>
                    <div className="p-8 md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">빅데이터 분석과 시각화</h2>
                      <p className="text-slate-600 mb-6">
                        대용량 데이터 처리 기술과 고급 시각화 기법을 배우는 과정입니다. 빅데이터 분석을 위한 분산 처리
                        시스템과 데이터 파이프라인 구축 방법을 배웁니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">10주 과정</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">30개 강의</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">고급자 대상</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">7월 개강</span>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-lg font-medium">상세 커리큘럼</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  week: "1주차",
                                  title: "빅데이터 개요 및 기술 스택",
                                  description: "빅데이터의 특성과 처리를 위한 기술 스택에 대해 알아봅니다.",
                                  topics: [
                                    "빅데이터의 특성(3V)",
                                    "빅데이터 처리 아키텍처",
                                    "빅데이터 기술 생태계",
                                    "빅데이터 활용 사례",
                                  ],
                                },
                                {
                                  week: "2주차",
                                  title: "Hadoop 및 Spark 기초",
                                  description: "분산 데이터 처리를 위한 Hadoop과 Spark의 기초를 배웁니다.",
                                  topics: ["Hadoop 아키텍처", "HDFS와 MapReduce", "Spark 기초", "RDD와 DataFrame"],
                                },
                                {
                                  week: "3주차",
                                  title: "분산 데이터 처리",
                                  description: "대용량 데이터의 분산 처리 방법을 배웁니다.",
                                  topics: [
                                    "분산 데이터 처리 원리",
                                    "Spark SQL",
                                    "Spark Streaming",
                                    "분산 머신러닝(MLlib)",
                                  ],
                                },
                              ].map((week, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <span className="font-semibold text-blue-600">{week.week}</span>
                                      <h4 className="text-lg font-medium">{week.title}</h4>
                                    </div>
                                    <Badge variant="outline">{index + 1}/10</Badge>
                                  </div>
                                  <p className="text-slate-600 mb-3">{week.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {week.topics.map((topic, i) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <div className="text-center">
                                <Button variant="link">전체 커리큘럼 보기</Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                          수강 신청하기
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          커리큘럼 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 프로그래밍 탭 */}
              <TabsContent value="programming" className="space-y-12">
                {/* 프로그래밍 과정 내용 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image
                        src="/online-learning-setup.png"
                        alt="파이썬 프로그래밍 기초"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      <Badge className="absolute top-4 left-4 bg-green-600 text-white">입문 과정</Badge>
                    </div>
                    <div className="p-8 md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">파이썬 프로그래밍 기초</h2>
                      <p className="text-slate-600 mb-6">
                        프로그래밍 경험이 없는 초보자를 위한 파이썬 기초 과정입니다. 기초 문법부터 실용적인 프로그램
                        작성까지 단계별로 배웁니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">6주 과정</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">18개 강의</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">입문자 대상</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Star className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">평점 4.9/5</span>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-lg font-medium">상세 커리큘럼</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  week: "1주차",
                                  title: "프로그래밍 기초 개념",
                                  description: "프로그래밍의 기본 개념과 파이썬 소개",
                                  topics: [
                                    "프로그래밍이란 무엇인가",
                                    "파이썬의 특징과 장점",
                                    "개발 환경 설정",
                                    "첫 번째 프로그램 작성",
                                  ],
                                },
                                {
                                  week: "2주차",
                                  title: "파이썬 설치 및 개발 환경 설정",
                                  description: "파이썬 설치와 개발에 필요한 도구 설정 방법을 배웁니다.",
                                  topics: ["파이썬 설치하기", "IDE 선택과 설정", "가상 환경 설정", "패키지 관리"],
                                },
                                {
                                  week: "3주차",
                                  title: "변수와 자료형",
                                  description: "파이썬의 기본 자료형과 변수 사용법을 배웁니다.",
                                  topics: ["변수와 할당", "숫자, 문자열, 불리언", "형 변환", "기본 연산자"],
                                },
                              ].map((week, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <span className="font-semibold text-blue-600">{week.week}</span>
                                      <h4 className="text-lg font-medium">{week.title}</h4>
                                    </div>
                                    <Badge variant="outline">{index + 1}/6</Badge>
                                  </div>
                                  <p className="text-slate-600 mb-3">{week.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {week.topics.map((topic, i) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <div className="text-center">
                                <Button variant="link">전체 커리큘럼 보기</Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                          수강 신청하기
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          커리큘럼 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              {/* 고급 AI 응용 탭 */}
              <TabsContent value="advanced" className="space-y-12">
                {/* 고급 AI 응용 과정 내용 */}
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className="md:grid md:grid-cols-3">
                    <div className="relative h-64 md:h-auto md:col-span-1">
                      <Image
                        src="/online-learning-setup.png"
                        alt="컴퓨터 비전과 이미지 처리"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
                      <Badge className="absolute top-4 left-4 bg-red-600 text-white">고급 과정</Badge>
                    </div>
                    <div className="p-8 md:col-span-2">
                      <h2 className="text-2xl font-bold mb-4">컴퓨터 비전과 이미지 처리</h2>
                      <p className="text-slate-600 mb-6">
                        AI를 활용한 이미지 처리와 컴퓨터 비전 기술을 심도 있게 배우는 과정입니다. 최신 딥러닝 모델을
                        활용한 이미지 인식, 객체 탐지, 세그멘테이션 기법을 배웁니다.
                      </p>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Clock className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">10주 과정</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <BookOpen className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">30개 강의</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <User className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">고급자 대상</span>
                        </div>
                        <div className="flex flex-col items-center justify-center p-4 bg-blue-50 rounded-lg">
                          <Calendar className="h-5 w-5 text-blue-600 mb-2" />
                          <span className="text-sm font-medium">8월 개강</span>
                        </div>
                      </div>

                      <Accordion type="single" collapsible className="mb-6">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-lg font-medium">상세 커리큘럼</AccordionTrigger>
                          <AccordionContent>
                            <div className="grid gap-4 mt-4">
                              {[
                                {
                                  week: "1주차",
                                  title: "디지털 이미지 처리 기초",
                                  description: "디지털 이미지의 기본 개념과 처리 방법을 배웁니다.",
                                  topics: ["디지털 이미지 표현", "색상 모델", "이미지 포맷", "이미지 처리 기본 연산"],
                                },
                                {
                                  week: "2주차",
                                  title: "OpenCV 활용법",
                                  description: "컴퓨터 비전 라이브러리인 OpenCV의 기본 사용법을 배웁니다.",
                                  topics: [
                                    "OpenCV 설치 및 기본 구조",
                                    "이미지 로딩 및 표시",
                                    "기본 이미지 처리 함수",
                                    "이미지 변환 및 필터링",
                                  ],
                                },
                                {
                                  week: "3주차",
                                  title: "이미지 필터링과 변환",
                                  description: "다양한 이미지 필터링 기법과 변환 방법을 배웁니다.",
                                  topics: ["공간 필터링", "주파수 영역 필터링", "기하학적 변환", "모폴로지 연산"],
                                },
                              ].map((week, index) => (
                                <div key={index} className="border rounded-lg p-4 hover:bg-blue-50 transition-colors">
                                  <div className="flex justify-between items-start mb-2">
                                    <div>
                                      <span className="font-semibold text-blue-600">{week.week}</span>
                                      <h4 className="text-lg font-medium">{week.title}</h4>
                                    </div>
                                    <Badge variant="outline">{index + 1}/10</Badge>
                                  </div>
                                  <p className="text-slate-600 mb-3">{week.description}</p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                    {week.topics.map((topic, i) => (
                                      <div key={i} className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                        <span className="text-sm">{topic}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              ))}
                              <div className="text-center">
                                <Button variant="link">전체 커리큘럼 보기</Button>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>

                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="w-full sm:w-auto">
                          수강 신청하기
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                          커리큘럼 다운로드
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* FAQ 섹션 */}
            <div className="mt-20 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">자주 묻는 질문</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    question: "수강 신청은 어떻게 하나요?",
                    answer:
                      "웹사이트에서 원하는 강의를 선택한 후 '수강 신청하기' 버튼을 클릭하여 신청할 수 있습니다. 결제 완료 후 바로 수강이 가능합니다.",
                  },
                  {
                    question: "수강 기간은 얼마나 되나요?",
                    answer:
                      "각 강의마다 수강 기간이 다르며, 일반적으로 강의 종료 후 6개월간 복습이 가능합니다. 자세한 내용은 각 강의 상세 페이지에서 확인하실 수 있습니다.",
                  },
                  {
                    question: "선수 지식이 필요한가요?",
                    answer:
                      "강의마다 요구되는 선수 지식이 다릅니다. 초급 과정은 기초 지식 없이도 수강 가능하며, 중급 이상의 과정은 관련 기초 지식이 필요할 수 있습니다.",
                  },
                  {
                    question: "수료증이 발급되나요?",
                    answer:
                      "네, 모든 강의는 수강 완료 후 수료증이 발급됩니다. 수료증은 PDF 형태로 다운로드 가능합니다.",
                  },
                  {
                    question: "환불 정책은 어떻게 되나요?",
                    answer:
                      "강의 시작 후 7일 이내에는 100% 환불이 가능하며, 이후에는 수강 진도에 따라 환불 금액이 차감됩니다. 자세한 내용은 이용약관을 참고해 주세요.",
                  },
                  {
                    question: "질문이나 문의사항이 있을 때는 어떻게 하나요?",
                    answer:
                      "강의 내 Q&A 게시판을 통해 질문하실 수 있으며, 기타 문의사항은 홈페이지 하단의 '문의하기' 메뉴를 통해 문의해 주세요.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA 섹션 */}
            <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">지금 바로 시작하세요</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                더 나은 미래를 위한 첫 걸음, 지금 바로 수강 신청하세요. 체계적인 커리큘럼과 전문 강사의 지도로 실력을
                향상시킬 수 있습니다.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                <Button>교육 문의하기</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <GraduationCap className="h-6 w-6" />
            <span>✨ 예영 EDU</span>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              이용약관
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              개인정보처리방침
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
              문의하기
            </Link>
          </nav>
          <div className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} ✨ 예영 EDU. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

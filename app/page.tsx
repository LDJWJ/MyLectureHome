"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  GraduationCap,
  MessageCircle,
  Code,
  Database,
  Cpu,
  Bot,
  Mail,
} from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <GraduationCap className="h-6 w-6" />
            <span>✨ 예영 EDU</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              예영 EDU 소개
            </Link>
            <Link href="/courses" className="text-sm font-medium hover:text-primary">
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
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <Badge className="inline-flex bg-primary text-primary-foreground">신규 강의 오픈</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    당신의 잠재력을 깨우는
                    <br />
                    <span className="text-primary">특별한 강의</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    전문 강사와 함께하는 체계적인 커리큘럼으로 실력을 향상시키고 새로운 기회를 만나보세요.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="gap-1">
                      교육 문의
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/courses">
                    <Button size="lg" variant="outline" className="gap-1">
                      커리큘럼 살펴보기
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>맞춤형 커리큘럼</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>저자 직강</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span>AI 전문 교육</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-video overflow-hidden rounded-xl border bg-background md:aspect-square lg:aspect-video">
                  <Image
                    src="/professional-instructor-teaching.png"
                    alt="강의 이미지"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/20" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/90 p-4 backdrop-blur">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">다음 강의 시작</div>
                        <div className="text-xs text-muted-foreground">2025년 5월 15일</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4">
                <div className="text-3xl font-bold">1000+</div>
                <div className="text-sm text-muted-foreground text-center">수강생</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm text-muted-foreground text-center">강의 과정</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4">
                <div className="text-3xl font-bold">3+</div>
                <div className="text-sm text-muted-foreground text-center">출판(번역,집필,기술감수)</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-4">
                <div className="text-3xl font-bold">10년+</div>
                <div className="text-sm text-muted-foreground text-center">교육 경력</div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    예영 EDU 소개
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                    안녕하세요,{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ✨ 예영 EDU
                    </span>
                    입니다
                  </h2>
                  <p className="max-w-[600px] text-slate-700 text-lg leading-relaxed">
                    10년 이상의 교육 경력을 바탕으로 수강생들에게 최고의 교육 경험을 제공하고 있습니다.
                  </p>
                </div>
                <ul className="grid gap-3">
                  {[
                    "관련 분야 10년 이상의 실무 경험",
                    "1000명 이상의 수강생 배출",
                    "수강생 맞춤형 커리큘럼 제공",
                    "초보 맞춤형 전반적 커리큘럼 제공",
                    "책 출판 : 데이터가 뛰어노는 AI 놀이터, 캐글",
                    "책 출판 : 제대로 시작하는 챗GPT와 AI활용 with 파이썬",
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm transition-all hover:shadow-md"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        <CheckCircle className="h-4 w-4" />
                      </div>
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button
                    variant="outline"
                    className="gap-2 bg-white border-blue-200 text-blue-700 hover:bg-blue-50 hover:text-blue-800"
                  >
                    <MessageCircle className="h-4 w-4" />
                    문의하기
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative aspect-square overflow-hidden rounded-2xl border shadow-lg transition-all hover:shadow-xl">
                  <Image src="/placeholder.svg?key=zyqbu" alt="강사 이미지" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                  교육 커리큘럼 소개
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">다양한 교육 커리큘럼</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  초보자부터 전문가까지, 모든 수준에 맞는 강의를 제공합니다.
                </p>
              </div>
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

              <TabsContent value="ai" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src="/online-learning-setup.png" alt="AI 기초 과정 썸네일" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">인기 강의</Badge>
                      <h3 className="text-xl font-bold">AI와 머신러닝 기초</h3>
                      <p className="mt-2 text-muted-foreground">
                        AI와 머신러닝의 기본 개념부터 실제 적용까지 배우는 입문자를 위한 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>8주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>24개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. AI와 머신러닝 소개</li>
                              <li>2. 파이썬 기초 및 데이터 처리</li>
                              <li>3. 지도학습과 비지도학습</li>
                              <li>4. 회귀 분석 기초</li>
                              <li>5. 분류 알고리즘 이해하기</li>
                              <li>6. 신경망 기초</li>
                              <li>7. 실전 프로젝트: 이미지 분류</li>
                              <li>8. 실전 프로젝트: 텍스트 분석</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src="/online-learning-setup.png" alt="딥러닝 기초 썸네일" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">신규 강의</Badge>
                      <h3 className="text-xl font-bold">딥러닝 기초와 응용</h3>
                      <p className="mt-2 text-muted-foreground">
                        딥러닝의 핵심 개념과 다양한 신경망 모델을 배우고 실습하는 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>10주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>30개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. 딥러닝 개요 및 역사</li>
                              <li>2. 신경망 구조와 활성화 함수</li>
                              <li>3. 역전파 알고리즘 이해하기</li>
                              <li>4. CNN 구조와 이미지 처리</li>
                              <li>5. RNN과 시계열 데이터 분석</li>
                              <li>6. LSTM과 GRU 모델</li>
                              <li>7. 트랜스포머 아키텍처</li>
                              <li>8. 실전 프로젝트: 이미지 생성</li>
                              <li>9. 실전 프로젝트: 자연어 처리</li>
                              <li>10. 모델 최적화 및 배포</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src="/online-learning-setup.png" alt="생성형 AI 썸네일" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">인기 강의</Badge>
                      <h3 className="text-xl font-bold">생성형 AI 마스터 과정</h3>
                      <p className="mt-2 text-muted-foreground">
                        ChatGPT, DALL-E, Stable Diffusion 등 최신 생성형 AI 기술을 배우고 활용하는 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>6주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>18개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. 생성형 AI 개요 및 발전 과정</li>
                              <li>2. 대규모 언어 모델(LLM) 이해하기</li>
                              <li>3. ChatGPT와 GPT 시리즈 활용법</li>
                              <li>4. 프롬프트 엔지니어링 기법</li>
                              <li>5. 이미지 생성 모델 이해하기</li>
                              <li>6. Stable Diffusion 실습</li>
                              <li>7. 오디오 및 비디오 생성 모델</li>
                              <li>8. 실전 프로젝트: AI 콘텐츠 제작</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="data" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src="/online-learning-setup.png"
                        alt="데이터 분석 기초 썸네일"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">기초 과정</Badge>
                      <h3 className="text-xl font-bold">데이터 분석 기초</h3>
                      <p className="mt-2 text-muted-foreground">
                        파이썬을 활용한 데이터 분석의 기초부터 시각화까지 배우는 입문 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>6주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>18개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. 데이터 분석 개요</li>
                              <li>2. 파이썬 기초 및 환경 설정</li>
                              <li>3. NumPy 기초</li>
                              <li>4. Pandas 데이터 처리</li>
                              <li>5. 데이터 정제 및 전처리</li>
                              <li>6. Matplotlib을 활용한 시각화</li>
                              <li>7. Seaborn을 활용한 고급 시각화</li>
                              <li>8. 실전 프로젝트: 데이터 분석 리포트 작성</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src="/online-learning-setup.png" alt="통계 분석 썸네일" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">중급 과정</Badge>
                      <h3 className="text-xl font-bold">통계 분석과 데이터 사이언스</h3>
                      <p className="mt-2 text-muted-foreground">
                        통계적 방법론을 활용한 데이터 분석과 의사결정 방법을 배우는 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>8주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>24개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. 확률과 통계 기초</li>
                              <li>2. 기술통계와 추론통계</li>
                              <li>3. 가설검정과 p-value</li>
                              <li>4. 상관관계와 인과관계</li>
                              <li>5. 회귀분석 심화</li>
                              <li>6. 시계열 분석</li>
                              <li>7. 베이지안 통계</li>
                              <li>8. 실전 프로젝트: 통계 모델링</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image
                        src="/online-learning-setup.png"
                        alt="빅데이터 분석 썸네일"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">고급 과정</Badge>
                      <h3 className="text-xl font-bold">빅데이터 분석과 시각화</h3>
                      <p className="mt-2 text-muted-foreground">
                        대용량 데이터 처리 기술과 고급 시각화 기법을 배우는 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>10주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>30개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. 빅데이터 개요 및 기술 스택</li>
                              <li>2. Hadoop 및 Spark 기초</li>
                              <li>3. 분산 데이터 처리</li>
                              <li>4. SQL과 NoSQL 데이터베이스</li>
                              <li>5. 데이터 파이프라인 구축</li>
                              <li>6. 대시보드 설계 및 구현</li>
                              <li>7. Tableau를 활용한 고급 시각화</li>
                              <li>8. D3.js를 활용한 인터랙티브 시각화</li>
                              <li>9. 실전 프로젝트: 빅데이터 분석 시스템 구축</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="programming" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src="/online-learning-setup.png" alt="파이썬 기초 썸네일" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">입문 과정</Badge>
                      <h3 className="text-xl font-bold">파이썬 프로그래밍 기초</h3>
                      <p className="mt-2 text-muted-foreground">
                        프로그래밍 경험이 없는 초보자를 위한 파이썬 기초 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>6주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>18개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. 프로그래밍 기초 개념</li>
                              <li>2. 파이썬 설치 및 개발 환경 설정</li>
                              <li>3. 변수와 자료형</li>
                              <li>4. 조건문과 반복문</li>
                              <li>5. 함수와 모듈</li>
                              <li>6. 리스트, 튜플, 딕셔너리</li>
                              <li>7. 파일 입출력</li>
                              <li>8. 실전 프로젝트: 간단한 프로그램 만들기</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src="/online-learning-setup.png" alt="웹 개발 기초 썸네일" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">중급 과정</Badge>
                      <h3 className="text-xl font-bold">웹 개발 기초와 프레임워크</h3>
                      <p className="mt-2 text-muted-foreground">
                        HTML, CSS, JavaScript부터 Flask, Django까지 웹 개발의 기초를 배우는 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>10주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>30개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. HTML 기초</li>
                              <li>2. CSS 스타일링</li>
                              <li>3. JavaScript 기초</li>
                              <li>4. 반응형 웹 디자인</li>
                              <li>5. Flask 프레임워크 입문</li>
                              <li>6. Django 프레임워크 기초</li>
                              <li>7. 데이터베이스 연동</li>
                              <li>8. RESTful API 설계</li>
                              <li>9. 사용자 인증 및 보안</li>
                              <li>10. 실전 프로젝트: 웹 애플리케이션 개발</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>

                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src="/online-learning-setup.png" alt="알고리즘 썸네일" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">고급 과정</Badge>
                      <h3 className="text-xl font-bold">알고리즘과 자료구조</h3>
                      <p className="mt-2 text-muted-foreground">
                        효율적인 코드 작성을 위한 알고리즘과 자료구조의 이해와 활용 방법을 배우는 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>8주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>24개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. 알고리즘 복잡도 분석</li>
                              <li>2. 배열과 연결 리스트</li>
                              <li>3. 스택과 큐</li>
                              <li>4. 트리와 그래프</li>
                              <li>5. 정렬 알고리즘</li>
                              <li>6. 탐색 알고리즘</li>
                              <li>7. 동적 프로그래밍</li>
                              <li>8. 그리디 알고리즘</li>
                              <li>9. 실전 프로젝트: 알고리즘 문제 해결</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="advanced" className="space-y-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <Card className="overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src="/online-learning-setup.png" alt="컴퓨터 비전 썸네일" fill className="object-cover" />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="mb-2">고급 과정</Badge>
                      <h3 className="text-xl font-bold">컴퓨터 비전과 이미지 처리</h3>
                      <p className="mt-2 text-muted-foreground">
                        AI를 활용한 이미지 처리와 컴퓨터 비전 기술을 심도 있게 배우는 과정입니다.
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4 text-muted-foreground" />
                          <span>10주 과정</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <BookOpen className="h-4 w-4 text-muted-foreground" />
                          <span>30개 강의</span>
                        </div>
                      </div>
                      <Accordion type="single" collapsible className="mt-4">
                        <AccordionItem value="curriculum">
                          <AccordionTrigger className="text-sm font-medium">커리큘럼 보기</AccordionTrigger>
                          <AccordionContent>
                            <ul className="space-y-2 text-sm text-muted-foreground">
                              <li>1. 디지털 이미지 처리 기초</li>
                              <li>2. OpenCV 활용법</li>
                              <li>3. 이미지 필터링과 변환</li>
                              <li>4. 객체 탐지 알고리즘</li>
                              <li>5. CNN을 활용한 이미지 분류</li>
                              <li>6. 얼굴 인식 및 감정 분석</li>
                              <li>7. 이미지 세그멘테이션</li>
                              <li>8. 3D 비전 기초</li>
                              <li>9. 실전 프로젝트: 컴퓨터 비전 응용</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <Link href="/courses">
                        <Button className="mt-4 w-full">자세히 보기</Button>
                      </Link>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* 고객 사례 섹션 제거하고 대신 고객 사례 페이지로 이동하는 섹션 추가 */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition-colors">
                  고객 사례
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  다양한{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    성공 사례
                  </span>
                  를 확인하세요
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed">
                  기업 교육, 대학 특강, 컨설팅 등 다양한 분야에서 성공적인 교육 사례를 소개합니다. 맞춤형 교육
                  프로그램으로 고객의 성공을 지원합니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link href="/case-studies">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      <ChevronRight className="h-5 w-5" />
                      고객 사례 보기
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-3 w-full max-w-4xl mt-8">
                {[
                  {
                    title: "기업 교육",
                    description: "다양한 기업에서 진행한 맞춤형 교육 프로그램 사례를 확인하세요.",
                    image: "/case-study-2.png",
                  },
                  {
                    title: "대학 특강",
                    description: "대학에서 진행한 특강 및 교육 프로그램 사례를 확인하세요.",
                    image: "/case-study-5.png",
                  },
                  {
                    title: "공공기관 교육",
                    description: "공공기관에서 진행한 디지털 전환 교육 사례를 확인하세요.",
                    image: "/case-study-6.png",
                  },
                ].map((item, index) => (
                  <Link href="/case-studies" key={index} className="block">
                    <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all h-full">
                      <div className="relative aspect-video">
                        <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <h3 className="text-xl font-bold text-white">{item.title}</h3>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <p className="text-slate-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Collaboration & Inquiry Section */}
        <section id="collaboration" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-white to-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800 transition-colors">
                  협업&출강문의
                </div>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
                  함께 성장할 수 있는{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    기회
                  </span>
                  를 만들어보세요
                </h2>
                <p className="text-slate-700 text-lg leading-relaxed">
                  기업 교육, 대학 특강, 컨설팅 등 다양한 형태의 협업이 가능합니다. 귀사의 요구사항에 맞는 맞춤형
                  프로그램을 제안해 드립니다.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2 w-full sm:w-auto">
                      <MessageCircle className="h-5 w-5" />
                      문의 페이지로 이동
                    </Button>
                  </Link>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 w-full sm:w-auto"
                    onClick={() =>
                      (window.location.href = "mailto:frontier1020@naver.com?subject=예영 EDU 협업/출강 문의")
                    }
                  >
                    <Mail className="h-5 w-5" />
                    이메일로 문의하기
                  </Button>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-3 w-full max-w-4xl mt-8">
                {[
                  {
                    title: "기업 교육",
                    description: "임직원 역량 강화를 위한 맞춤형 교육 프로그램을 제공합니다.",
                    icon: <GraduationCap className="h-6 w-6" />,
                  },
                  {
                    title: "대학 특강",
                    description: "학생들에게 실무 경험과 최신 트렌드를 전달하는 특강을 진행합니다.",
                    icon: <BookOpen className="h-6 w-6" />,
                  },
                  {
                    title: "컨설팅",
                    description: "프로젝트 또는 제품의 품질 향상을 위한 전문적인 컨설팅을 제공합니다.",
                    icon: <MessageCircle className="h-6 w-6" />,
                  },
                ].map((item, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                      <p className="text-slate-600">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">지금 바로 시작하세요</h2>
                <p className="max-w-[900px] md:text-xl">더 나은 미래를 위한 첫 걸음, 지금 바로 수강 신청하세요.</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="gap-1">
                  지금 신청하기
                  <ChevronRight className="h-4 w-4" />
                </Button>
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    상담 예약하기
                  </Button>
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

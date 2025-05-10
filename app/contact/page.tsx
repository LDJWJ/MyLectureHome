"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Mail, ArrowLeft, Phone, Clock, Send } from "lucide-react"

export default function ContactPage() {
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
            <Link href="/#courses" className="text-sm font-medium hover:text-primary">
              교육 커리큘럼 소개
            </Link>
            <Link href="/#case-studies" className="text-sm font-medium hover:text-primary">
              고객 사례
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
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
                  협업 및 출강 문의
                </span>
              </h1>
              <p className="max-w-[700px] text-lg text-slate-700 md:text-xl">
                기업 교육, 대학 특강, 컨설팅 등 다양한 형태의 협업이 가능합니다. 아래 연락처로 문의해 주시면 빠르게 답변
                드리겠습니다.
              </p>
            </div>

            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 justify-items-center max-w-4xl mx-auto">
              <Card className="w-full max-w-sm overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <Mail className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">이메일 문의</h3>
                  <p className="text-muted-foreground">
                    아래 이메일로 문의사항을 보내주세요. 24시간 이내에 답변 드리겠습니다.
                  </p>
                  <div className="text-lg font-medium text-blue-700">frontier1020@naver.com</div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all md:col-span-2 lg:col-span-1">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                    <Clock className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold">상담 예약</h3>
                  <p className="text-muted-foreground">
                    직접 상담을 원하시면 이메일로 일정을 조율해 주세요. 온라인/오프라인 미팅 모두 가능합니다.
                  </p>
                  <div className="text-lg font-medium text-blue-700">frontier1020@naver.com</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">자주 묻는 질문</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {[
                  {
                    question: "기업 교육은 어떤 방식으로 진행되나요?",
                    answer:
                      "기업의 요구사항과 교육 목표에 맞춰 맞춤형 커리큘럼을 설계합니다. 온라인/오프라인 교육 모두 가능하며, 실습 위주의 교육을 제공합니다.",
                  },
                  {
                    question: "최소 교육 인원이 있나요?",
                    answer:
                      "최소 5명부터 최대 30명까지 교육이 가능합니다. 소규모 그룹일수록 더 집중적인 교육이 가능합니다.",
                  },
                  {
                    question: "교육 비용은 어떻게 되나요?",
                    answer: "교육 내용, 기간, 인원에 따라 비용이 달라집니다. 자세한 견적은 이메일로 문의해 주세요.",
                  },
                  {
                    question: "교육 자료는 제공되나요?",
                    answer:
                      "모든 교육에는 PDF 형태의 강의 자료와 실습 파일이 제공됩니다.",
                  },
                ].map((faq, index) => (
                  <div key={index} className="p-4 border rounded-lg hover:bg-blue-50 transition-colors">
                    <h3 className="font-bold text-lg mb-2">{faq.question}</h3>
                    <p className="text-slate-600">{faq.answer}</p>
                  </div>
                ))}
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

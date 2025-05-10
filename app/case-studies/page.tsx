"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, ArrowLeft, Building, Users, Calendar, ChevronRight } from "lucide-react"

export default function CaseStudiesPage() {
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
            <Link href="/case-studies" className="text-sm font-medium text-primary">
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
                  성공적인 고객 사례
                </span>
              </h1>
              <p className="max-w-[700px] text-lg text-slate-700 md:text-xl">
                다양한 기업 및 기관에서 진행한 강의와 컨설팅 사례를 소개합니다. 맞춤형 교육 프로그램으로 고객의 성공을
                지원합니다.
              </p>
            </div>

            {/* 주요 고객사 로고 섹션 */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-center mb-8">주요 고객사</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-24 flex items-center justify-center">
                  <Image
                    src="/samsung-heavy-industries-logo.png"
                    alt="삼성 중공업 로고"
                    width={180}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-24 flex items-center justify-center">
                  <Image
                    src="/goorm-edu-logo.png"
                    alt="구름 EDU 로고"
                    width={140}
                    height={50}
                    className="object-contain"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-24 flex items-center justify-center">
                  <Image src="/kakao-logo.png" alt="카카오 로고" width={180} height={50} className="object-contain" />
                </div>
                <div className="bg-white rounded-lg shadow-md p-6 w-full h-24 flex items-center justify-center">
                  <div className="text-xl font-semibold text-slate-400">고객사 로고 4</div>
                </div>
              </div>
            </div>

            {/* 상세 사례 연구 */}
            <div className="space-y-16">
              {/* 사례 1 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image src="/case-study-2.png" alt="대기업 AI 교육 사례" fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-10">
                    <Badge className="mb-4">기업 교육</Badge>
                    <h2 className="text-2xl font-bold mb-4">대기업 AI 역량 강화 프로그램</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">대기업 A사</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">임직원 50명 대상</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">8주 집중 교육 프로그램</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6">
                      AI 기술 도입을 위한 임직원 역량 강화 프로그램을 진행했습니다. 기초 이론부터 실무 적용까지 체계적인
                      커리큘럼으로 구성하여 참가자들의 AI 이해도와 활용 능력을 크게 향상시켰습니다.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold mb-2">성과</h3>
                      <ul className="list-disc list-inside text-slate-700 space-y-1">
                        <li>참가자 만족도 95% 달성</li>
                        <li>AI 활용 업무 프로세스 10개 개발</li>
                        <li>업무 효율성 30% 향상</li>
                      </ul>
                    </div>

                    <Button className="w-full sm:w-auto">상세 사례 보기</Button>
                  </div>
                </div>
              </div>

              {/* 사례 2 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto md:order-2">
                    <Image src="/case-study-3.png" alt="스타트업 데이터 분석 교육 사례" fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-10 md:order-1">
                    <Badge className="mb-4">스타트업 컨설팅</Badge>
                    <h2 className="text-2xl font-bold mb-4">스타트업 데이터 분석 역량 강화</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">테크 스타트업 B사</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">개발팀 15명 대상</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">4주 맞춤형 교육</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6">
                      성장 단계 스타트업의 데이터 기반 의사결정 역량을 강화하기 위한 맞춤형 교육을 진행했습니다. 실제
                      비즈니스 데이터를 활용한 실습 중심의 교육으로 즉시 적용 가능한 스킬을 습득하도록 했습니다.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold mb-2">성과</h3>
                      <ul className="list-disc list-inside text-slate-700 space-y-1">
                        <li>데이터 기반 의사결정 프로세스 구축</li>
                        <li>고객 이탈률 20% 감소</li>
                        <li>마케팅 ROI 35% 향상</li>
                      </ul>
                    </div>

                    <Button className="w-full sm:w-auto">상세 사례 보기</Button>
                  </div>
                </div>
              </div>

              {/* 사례 3 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <Image src="/case-study-5.png" alt="대학 특강 사례" fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-10">
                    <Badge className="mb-4">대학 특강</Badge>
                    <h2 className="text-2xl font-bold mb-4">대학 AI 집중 특강 시리즈</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">C 대학교 컴퓨터공학과</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">학부생 및 대학원생 100명</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">한 학기 특강 시리즈</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6">
                      컴퓨터공학과 학생들을 대상으로 최신 AI 기술 동향과 실무 적용 사례를 소개하는 특강 시리즈를
                      진행했습니다. 이론과 실습을 병행하여 학생들의 실무 역량을 강화했습니다.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold mb-2">성과</h3>
                      <ul className="list-disc list-inside text-slate-700 space-y-1">
                        <li>학생 만족도 98% 달성</li>
                        <li>10개 이상의 학생 프로젝트 지도</li>
                        <li>3명의 학생 AI 관련 기업 취업</li>
                      </ul>
                    </div>

                    <Button className="w-full sm:w-auto">상세 사례 보기</Button>
                  </div>
                </div>
              </div>

              {/* 사례 4 */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto md:order-2">
                    <Image src="/case-study-6.png" alt="공공기관 교육 사례" fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-10 md:order-1">
                    <Badge className="mb-4">공공기관 교육</Badge>
                    <h2 className="text-2xl font-bold mb-4">공공기관 디지털 전환 교육</h2>

                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-2">
                        <Building className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">D 공공기관</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">관리자 및 실무자 30명</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <span className="text-slate-700">12주 장기 프로그램</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-6">
                      공공기관의 디지털 전환을 위한 역량 강화 프로그램을 진행했습니다. 데이터 기반 의사결정과 AI 활용
                      방안에 중점을 두어 공공 서비스의 효율성과 품질을 향상시켰습니다.
                    </p>

                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold mb-2">성과</h3>
                      <ul className="list-disc list-inside text-slate-700 space-y-1">
                        <li>5개 업무 프로세스 자동화 구현</li>
                        <li>민원 처리 시간 40% 단축</li>
                        <li>디지털 전환 로드맵 수립</li>
                      </ul>
                    </div>

                    <Button className="w-full sm:w-auto">상세 사례 보기</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* 고객 후기 섹션 */}
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-center mb-8">고객 후기</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    quote:
                      "실무에 바로 적용할 수 있는 내용으로 구성되어 매우 유익했습니다. 특히 실습 중심의 교육 방식이 큰 도움이 되었습니다.",
                    author: "김OO",
                    position: "A사 데이터 분석팀 팀장",
                  },
                  {
                    quote:
                      "어려운 AI 개념을 쉽게 설명해주셔서 비전공자인 저도 잘 이해할 수 있었습니다. 덕분에 업무에 AI를 활용할 수 있게 되었습니다.",
                    author: "이OO",
                    position: "B사 마케팅 매니저",
                  },
                  {
                    quote:
                      "맞춤형 커리큘럼으로 우리 회사의 니즈에 딱 맞는 교육을 받을 수 있었습니다. 교육 후 팀의 생산성이 크게 향상되었습니다.",
                    author: "박OO",
                    position: "C사 개발팀 리더",
                  },
                ].map((testimonial, index) => (
                  <Card key={index} className="border-none shadow-md hover:shadow-lg transition-all">
                    <CardContent className="p-6">
                      <div className="text-4xl text-blue-200 mb-4">"</div>
                      <p className="text-slate-600 mb-6 italic">{testimonial.quote}</p>
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center text-white font-bold">
                          {testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold">{testimonial.author}</div>
                          <div className="text-sm text-slate-500">{testimonial.position}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* CTA 섹션 */}
            <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 md:p-12 text-white text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">맞춤형 교육 프로그램이 필요하신가요?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                귀사의 요구사항에 맞는 최적의 교육 프로그램을 제안해 드립니다. 지금 바로 문의하세요.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                    문의하기
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white/10 w-full sm:w-auto"
                >
                  교육 과정 살펴보기
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
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

"use client"
import { Button } from '@/components/button'
import { BlogCard } from '@/components/cards'
import { GlobalLoader } from '@/components/global-loader'
import { Container, PageHeader, SectionHeader } from '@/components/section'
import { blogPosts } from '@/data/mock'
import { ArrowRight } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'


export function Blog({section}:{section: string}) {

     const [isLoading, setIsLoading] = useState(true);
        const link = usePathname();
    
        useEffect(() => {
          setTimeout(() => {
            setIsLoading(false);
          }, 3000);
        })
  return (
    <>
       {isLoading && <GlobalLoader isLoading={isLoading} />}
       {section !== "home" &&
        <PageHeader title="Our Blog" link={`Home ${link}`}/>
       }
      {/* Latest Blog Posts */}
          <section className="py-10 md:py-20 bg-white">
            <Container>
                {section == "home" &&
              <SectionHeader 
                title="Latest from Our Blog"
                subtitle="Stay updated with the latest insights, tutorials, and industry news"
              />
                }
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post, index: number) => (
                  <BlogCard key={index} {...post} />
                ))}
              </div>
              <div className="text-center mt-12">
                <Button variant="outline" size="md" link="/">
                  View All Posts <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </Container>
          </section>
    </>
  )
}

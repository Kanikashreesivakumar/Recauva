import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Calendar, User, Tag, Share2, Facebook, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import TextReveal from "@/components/text-reveal"
import AnimatedBlob from "@/components/animated-blob"

// Sample blog data
const blogPosts = {
  "post-surgery-exercises": {
    title: "10 Essential Exercises for Post-Surgery Recovery",
    excerpt:
      "Learn about the most effective exercises to speed up your recovery after surgery and regain your strength and mobility safely.",
    content: `
      <p>Recovering from surgery can be a challenging process, but with the right exercises, you can significantly improve your healing time and regain your strength and mobility more quickly. In this article, we'll explore ten essential exercises that are beneficial for post-surgery recovery.</p>
      
      <h2>Why Exercise Matters After Surgery</h2>
      <p>Before diving into specific exercises, it's important to understand why physical activity is crucial during recovery. Proper exercise after surgery helps:</p>
      <ul>
        <li>Prevent blood clots and improve circulation</li>
        <li>Reduce swelling and inflammation</li>
        <li>Prevent muscle atrophy and weakness</li>
        <li>Improve joint mobility and flexibility</li>
        <li>Accelerate the healing process</li>
        <li>Boost mood and mental well-being</li>
      </ul>
      
      <p>However, it's essential to follow your healthcare provider's guidance regarding when to start exercising and which movements are safe for your specific condition.</p>
      
      <h2>10 Beneficial Post-Surgery Exercises</h2>
      
      <h3>1. Ankle Pumps</h3>
      <p>This simple exercise improves circulation in the lower extremities and helps prevent blood clots.</p>
      <p><strong>How to do it:</strong> While lying down, move your feet up and down by bending your ankle, pumping them back and forth 10-15 times. Repeat several times throughout the day.</p>
      
      <h3>2. Gentle Walking</h3>
      <p>Walking is one of the most beneficial activities during recovery, promoting circulation and preventing complications from inactivity.</p>
      <p><strong>How to do it:</strong> Start with short, slow walks around your home, gradually increasing distance as tolerated. Use assistive devices if recommended by your healthcare provider.</p>
      
      <h3>3. Deep Breathing Exercises</h3>
      <p>These exercises help expand your lungs, prevent pneumonia, and improve oxygen flow throughout your body.</p>
      <p><strong>How to do it:</strong> Inhale deeply through your nose, allowing your abdomen to rise. Hold for a few seconds, then exhale slowly through your mouth. Repeat 10 times, several times daily.</p>
      
      <h3>4. Shoulder Rolls</h3>
      <p>This gentle exercise helps maintain shoulder mobility and reduces stiffness in the upper body.</p>
      <p><strong>How to do it:</strong> Sitting upright, roll your shoulders forward in a circular motion 5-10 times, then backward 5-10 times.</p>
      
      <h3>5. Gentle Knee Bends</h3>
      <p>This exercise helps maintain knee mobility and strengthens the quadriceps muscles.</p>
      <p><strong>How to do it:</strong> While standing and holding onto a stable surface for support, slightly bend your knees and return to the starting position. Repeat 10 times.</p>
      
      <h3>6. Arm Slides</h3>
      <p>This exercise helps maintain shoulder and arm mobility.</p>
      <p><strong>How to do it:</strong> Sitting or standing with your arm at your side, slowly slide your arm up along your side as far as comfortable, then return to the starting position. Repeat 10 times on each side.</p>
      
      <h3>7. Seated Marching</h3>
      <p>This exercise strengthens the hip flexors and improves lower body circulation.</p>
      <p><strong>How to do it:</strong> Sitting in a chair with good posture, lift one knee up toward your chest, then lower it back down. Alternate legs for 10-15 repetitions on each side.</p>
      
      <h3>8. Gentle Neck Stretches</h3>
      <p>These stretches help relieve tension and maintain mobility in the neck.</p>
      <p><strong>How to do it:</strong> Sitting with good posture, slowly tilt your head toward one shoulder until you feel a gentle stretch. Hold for 15-30 seconds, then repeat on the other side.</p>
      
      <h3>9. Seated Leg Extensions</h3>
      <p>This exercise strengthens the quadriceps muscles and improves knee mobility.</p>
      <p><strong>How to do it:</strong> Sitting in a chair, slowly extend one leg until it's straight, hold briefly, then lower it back down. Repeat 10 times on each leg.</p>
      
      <h3>10. Gentle Core Engagement</h3>
      <p>This exercise helps maintain core strength without straining surgical sites.</p>
      <p><strong>How to do it:</strong> While sitting or lying down, gently tighten your abdominal muscles without holding your breath. Hold for 5 seconds, then release. Repeat 10 times.</p>
      
      <h2>Important Considerations</h2>
      <p>When incorporating these exercises into your recovery routine, remember:</p>
      <ul>
        <li>Always follow your healthcare provider's specific recommendations</li>
        <li>Start slowly and gradually increase intensity</li>
        <li>Stop if you experience pain, dizziness, or shortness of breath</li>
        <li>Maintain proper form to prevent injury</li>
        <li>Stay consistent with your exercise routine</li>
      </ul>
      
      <h2>When to Seek Professional Help</h2>
      <p>Working with a physiotherapist can significantly enhance your recovery process. A professional can:</p>
      <ul>
        <li>Create a personalized exercise program tailored to your specific needs</li>
        <li>Ensure you're performing exercises correctly</li>
        <li>Adjust your program as you progress</li>
        <li>Provide hands-on techniques to improve healing</li>
        <li>Monitor your progress and address any concerns</li>
      </ul>
      
      <p>At Reccova, our experienced physiotherapists specialize in post-surgery rehabilitation and can provide personalized care in the comfort of your home.</p>
      
      <h2>Conclusion</h2>
      <p>Recovery after surgery takes time and patience, but incorporating appropriate exercises can significantly improve your outcomes. Remember to start slowly, listen to your body, and follow your healthcare provider's guidance. With consistency and proper technique, these ten exercises can help you regain your strength, mobility, and independence more quickly.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "May 15, 2023",
    category: "Recovery Tips",
    author: "Dr. Sarah Johnson",
    authorImage: "/placeholder.svg?height=80&width=80",
    authorBio:
      "Dr. Sarah Johnson is a senior physiotherapist at Reccova with over 15 years of experience specializing in post-surgical rehabilitation and sports injuries.",
  },
  "chronic-pain-management": {
    title: "Understanding Chronic Pain: Causes and Management",
    excerpt:
      "Our experts explain the science behind chronic pain and effective strategies for managing it in your daily life.",
    content: `
      <p>Chronic pain affects millions of people worldwide and can significantly impact quality of life. In this comprehensive guide, we'll explore the causes of chronic pain and evidence-based strategies for effective management.</p>
      
      <h2>What is Chronic Pain?</h2>
      <p>Chronic pain is generally defined as pain that persists for 12 weeks or longer, even after the initial injury or illness has healed. Unlike acute pain, which serves as a warning signal for potential tissue damage, chronic pain often continues long after it has served its purpose.</p>
      
      <h2>Common Causes of Chronic Pain</h2>
      <p>Chronic pain can stem from various conditions and factors:</p>
      <ul>
        <li><strong>Musculoskeletal disorders:</strong> Conditions like arthritis, fibromyalgia, and back problems</li>
        <li><strong>Nerve damage:</strong> Neuropathic pain resulting from injury or diseases affecting the nervous system</li>
        <li><strong>Previous injuries:</strong> Pain that persists after an injury has healed</li>
        <li><strong>Inflammatory conditions:</strong> Chronic inflammation that leads to persistent pain</li>
        <li><strong>Autoimmune disorders:</strong> Conditions where the immune system attacks healthy tissues</li>
        <li><strong>Cancer:</strong> Pain related to tumors or cancer treatments</li>
      </ul>
      
      <h2>The Science Behind Chronic Pain</h2>
      <p>Understanding the mechanisms of chronic pain can help in developing effective management strategies:</p>
      
      <h3>Central Sensitization</h3>
      <p>In chronic pain, the central nervous system becomes hypersensitive, amplifying pain signals. This process, known as central sensitization, makes the brain more receptive to pain signals, causing even mild stimuli to trigger pain responses.</p>
      
      <h3>Pain Memory</h3>
      <p>The brain can develop "pain memory," where neural pathways associated with pain become strengthened over time, making it easier for pain signals to travel along these pathways.</p>
      
      <h3>Neuroplasticity</h3>
      <p>The brain's ability to reorganize itself (neuroplasticity) plays a role in both the development and management of chronic pain. While it can contribute to pain persistence, it also offers hope for recovery through targeted interventions.</p>
      
      <h2>Comprehensive Pain Management Strategies</h2>
      <p>Effective chronic pain management typically involves a multidisciplinary approach:</p>
      
      <h3>1. Physical Therapy and Exercise</h3>
      <p>Regular physical activity and targeted exercises can:</p>
      <ul>
        <li>Strengthen muscles and improve flexibility</li>
        <li>Release endorphins, the body's natural painkillers</li>
        <li>Improve circulation and reduce inflammation</li>
        <li>Prevent deconditioning and further pain</li>
      </ul>
      
      <h3>2. Manual Therapy Techniques</h3>
      <p>Hands-on treatments provided by physiotherapists can help manage chronic pain:</p>
      <ul>
        <li>Joint mobilization and manipulation</li>
        <li>Soft tissue massage and myofascial release</li>
        <li>Trigger point therapy</li>
        <li>Neural mobilization techniques</li>
      </ul>
      
      <h3>3. Mind-Body Approaches</h3>
      <p>The connection between mental and physical health is particularly important in chronic pain management:</p>
      <ul>
        <li>Cognitive-behavioral therapy (CBT)</li>
        <li>Mindfulness meditation and relaxation techniques</li>
        <li>Biofeedback</li>
        <li>Stress management strategies</li>
      </ul>
      
      <h3>4. Lifestyle Modifications</h3>
      <p>Daily habits can significantly impact chronic pain:</p>
      <ul>
        <li>Improving sleep hygiene and quality</li>
        <li>Adopting an anti-inflammatory diet</li>
        <li>Maintaining a healthy weight</li>
        <li>Pacing activities to prevent pain flare-ups</li>
      </ul>
      
      <h3>5. Modalities and Assistive Devices</h3>
      <p>Various therapeutic modalities can provide relief:</p>
      <ul>
        <li>Heat and cold therapy</li>
        <li>Transcutaneous electrical nerve stimulation (TENS)</li>
        <li>Ergonomic adaptations and assistive devices</li>
        <li>Bracing or taping techniques</li>
      </ul>
      
      <h2>The Role of Home-Based Physiotherapy</h2>
      <p>For individuals with chronic pain, home-based physiotherapy offers several advantages:</p>
      <ul>
        <li>Convenience and comfort of receiving treatment in a familiar environment</li>
        <li>Reduced stress and anxiety associated with travel</li>
        <li>Personalized assessment of your home environment</li>
        <li>Practical recommendations for daily activities</li>
        <li>Consistent care from the same therapist</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Managing chronic pain effectively requires a comprehensive, individualized approach. By combining physical interventions, psychological strategies, and lifestyle modifications, many people can experience significant improvements in their pain levels and quality of life.</p>
      
      <p>At Reccova, our specialized physiotherapists are trained in evidence-based approaches to chronic pain management. We work closely with you to develop a personalized treatment plan that addresses your specific needs and helps you regain control over your life.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "April 28, 2023",
    category: "Expert Advice",
    author: "Dr. Michael Chen",
    authorImage: "/placeholder.svg?height=80&width=80",
    authorBio:
      "Dr. Michael Chen is a pain management specialist at Reccova with expertise in treating chronic pain conditions using an integrative approach combining physical therapy, education, and lifestyle modifications.",
  },
  "benefits-of-stretching": {
    title: "The Benefits of Regular Stretching for All Ages",
    excerpt:
      "Discover how incorporating simple stretching routines into your daily life can improve flexibility, reduce pain, and enhance overall well-being.",
    content: `
      <p>Stretching is often overlooked in fitness routines, yet it offers numerous benefits for people of all ages and fitness levels. In this article, we'll explore the science behind stretching and how it can improve your physical and mental well-being.</p>
      
      <h2>The Science of Stretching</h2>
      <p>Stretching works by elongating muscles and increasing the range of motion in joints. When you stretch regularly, several physiological changes occur:</p>
      <ul>
        <li>Muscle fibers lengthen and become more elastic</li>
        <li>Blood flow to muscles increases</li>
        <li>Joint lubrication improves</li>
        <li>Nerve pathways become more efficient</li>
        <li>Fascia (connective tissue) becomes more pliable</li>
      </ul>
      
      <h2>Key Benefits of Regular Stretching</h2>
      
      <h3>1. Improved Flexibility and Range of Motion</h3>
      <p>Regular stretching gradually increases your flexibility and range of motion. This makes daily activities easier and helps prevent the natural loss of mobility that comes with aging.</p>
      
      <h3>2. Reduced Risk of Injury</h3>
      <p>Flexible muscles and mobile joints are less prone to injuries. Stretching prepares your body for physical activity by increasing tissue temperature and improving elasticity.</p>
      
      <h3>3. Enhanced Physical Performance</h3>
      <p>Whether you're an athlete or simply enjoy recreational activities, stretching can improve your performance by optimizing muscle function and joint mobility.</p>
      
      <h3>4. Better Posture</h3>
      <p>Many people develop poor posture due to prolonged sitting and muscle imbalances. Regular stretching helps realign the body by lengthening tight muscles that pull the body out of alignment.</p>
      
      <h3>5. Stress Relief</h3>
      <p>Stretching promotes relaxation by releasing physical tension stored in the body. The mindful nature of stretching also creates a mental break that can reduce stress and anxiety.</p>
      
      <h3>6. Improved Circulation</h3>
      <p>Stretching increases blood flow to muscles, which delivers more nutrients and oxygen while removing waste products. This improved circulation promotes faster recovery and better overall health.</p>
      
      <h3>7. Pain Reduction</h3>
      <p>Regular stretching can alleviate chronic pain by reducing muscle tension, improving joint function, and enhancing body awareness.</p>
      
      <h2>Stretching for Different Age Groups</h2>
      
      <h3>Children and Adolescents</h3>
      <p>Young people are naturally more flexible, but stretching is still important for them. It helps:</p>
      <ul>
        <li>Support proper growth and development</li>
        <li>Establish healthy movement patterns</li>
        <li>Prevent sports-related injuries</li>
        <li>Improve coordination and body awareness</li>
      </ul>
      
      <h3>Adults</h3>
      <p>For adults, stretching becomes increasingly important to counteract the effects of sedentary lifestyles and repetitive movements. Regular stretching helps:</p>
      <ul>
        <li>Counteract the effects of prolonged sitting</li>
        <li>Reduce work-related muscle tension</li>
        <li>Maintain functional mobility</li>
        <li>Manage stress and improve sleep quality</li>
      </ul>
      
      <h3>Older Adults</h3>
      <p>As we age, flexibility naturally decreases. Regular stretching becomes crucial for:</p>
      <ul>
        <li>Maintaining independence in daily activities</li>
        <li>Preventing falls by improving balance</li>
        <li>Reducing joint stiffness associated with arthritis</li>
        <li>Enhancing circulation and tissue health</li>
      </ul>
      
      <h2>Types of Stretching</h2>
      
      <h3>Static Stretching</h3>
      <p>This involves holding a stretch in a comfortable position for a period of time, typically 15-60 seconds. Static stretching is best performed after physical activity when muscles are warm.</p>
      
      <h3>Dynamic Stretching</h3>
      <p>These are controlled movements that take your body through a full range of motion. Dynamic stretches are ideal before exercise as they prepare the body for activity.</p>
      
      <h3>PNF (Proprioceptive Neuromuscular Facilitation)</h3>
      <p>This advanced technique involves alternating contraction and relaxation of muscles to achieve deeper stretches. It's often performed with a partner or therapist.</p>
      
      <h3>Myofascial Release</h3>
      <p>Using foam rollers or massage balls, this technique targets the fascia (connective tissue) to release tension and improve mobility.</p>
      
      <h2>Incorporating Stretching Into Your Daily Routine</h2>
      
      <p>To experience the benefits of stretching, consistency is key. Here are some tips for making stretching a regular part of your life:</p>
      
      <ul>
        <li>Start with 5-10 minutes of stretching daily</li>
        <li>Stretch in the morning to energize your body</li>
        <li>Take short stretching breaks during work hours</li>
        <li>Incorporate stretching into your pre- and post-workout routines</li>
        <li>Try gentle stretching before bed to promote relaxation</li>
        <li>Join a yoga or stretching class for guidance and motivation</li>
      </ul>
      
      <h2>Safety Considerations</h2>
      
      <p>While stretching is generally safe, it's important to follow these guidelines:</p>
      
      <ul>
        <li>Warm up before deep stretching (e.g., with light walking or marching in place)</li>
        <li>Stretch to the point of mild tension, not pain</li>
        <li>Breathe deeply and naturally throughout each stretch</li>
        <li>Move slowly and mindfully, avoiding bouncing or jerking movements</li>
        <li>Consult a healthcare professional if you have existing injuries or medical conditions</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Regular stretching offers numerous benefits for people of all ages, from improved flexibility and reduced pain to enhanced well-being and stress relief. By incorporating just a few minutes of stretching into your daily routine, you can experience significant improvements in how your body feels and functions.</p>
      
      <p>At Reccova, our physiotherapists can create personalized stretching programs tailored to your specific needs and goals. Whether you're recovering from an injury, managing chronic pain, or simply wanting to improve your mobility, we're here to support your journey to better health.</p>
    `,
    image: "/placeholder.svg?height=600&width=1200",
    date: "March 12, 2023",
    category: "Wellness",
    author: "Emily Rodriguez",
    authorImage: "/placeholder.svg?height=80&width=80",
    authorBio:
      "Emily Rodriguez is a certified physiotherapist and yoga instructor at Reccova, specializing in therapeutic stretching and mobility programs for clients of all ages and abilities.",
  },
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const post = blogPosts[slug as keyof typeof blogPosts]

  if (!post) {
    return (
      <div className="pt-24 pb-20 text-center">
        <h1 className="text-3xl font-bold mb-4">Post not found</h1>
        <p className="mb-6">The blog post you're looking for doesn't exist.</p>
        <Button asChild>
          <Link href="/blog">Back to Blog</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20 relative overflow-hidden">
      {/* Decorative Elements */}
      <AnimatedBlob color="ACE1AF" size="400px" top="-200px" left="-200px" />
      <AnimatedBlob color="#FFB4A2" size="350px" bottom="-150px" right="-150px" delay={2} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <TextReveal>
            <Button variant="outline" className="mb-8 rounded-full" asChild>
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </TextReveal>

          {/* Featured Image */}
          <TextReveal>
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-xl">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </TextReveal>

          {/* Post Header */}
          <TextReveal>
            <div className="mb-8">
              <div className="flex flex-wrap gap-4 items-center mb-4">
                <span className="inline-flex items-center text-gray-500">
                  <Calendar className="mr-1 h-4 w-4" />
                  {post.date}
                </span>
                <span className="inline-flex items-center text-gray-500">
                  <User className="mr-1 h-4 w-4" />
                  {post.author}
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-reccova-green/10 to-reccova-mint/10 text-reccova-green">
                  <Tag className="mr-1 h-4 w-4" />
                  {post.category}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 gradient-text">{post.title}</h1>

              <p className="text-xl text-gray-600">{post.excerpt}</p>
            </div>
          </TextReveal>

          {/* Post Content */}
          <TextReveal>
            <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
              <div
                className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-headings:font-semibold prose-p:text-gray-600 prose-a:text-reccova-green prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>
          </TextReveal>

          {/* Author Bio */}
          <TextReveal>
            <div className="bg-gradient-to-r from-reccova-green/5 to-reccova-mint/5 rounded-2xl p-6 flex flex-col md:flex-row items-center gap-6 mb-8">
              <Image
                src={post.authorImage || "/placeholder.svg"}
                alt={post.author}
                width={100}
                height={100}
                className="rounded-full border-4 border-white shadow-md"
              />
              <div>
                <h3 className="text-xl font-semibold mb-2">{post.author}</h3>
                <p className="text-gray-600">{post.authorBio}</p>
              </div>
            </div>
          </TextReveal>

          {/* Share Buttons */}
          <TextReveal>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl shadow-lg p-6">
              <span className="font-medium text-gray-700 flex items-center">
                <Share2 className="mr-2 h-5 w-5" />
                Share this article
              </span>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                  asChild
                >
                  <a href="#" aria-label="Share on Facebook">
                    <Facebook />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-sky-50 hover:text-sky-500 hover:border-sky-200"
                  asChild
                >
                  <a href="#" aria-label="Share on Twitter">
                    <Twitter />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200"
                  asChild
                >
                  <a href="#" aria-label="Share on LinkedIn">
                    <Linkedin />
                  </a>
                </Button>
              </div>
            </div>
          </TextReveal>
        </div>
      </div>
    </div>
  )
}


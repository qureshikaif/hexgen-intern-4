"use client";
import Header from "@/components/Header";
import {
  Star,
  Eye,
  MessageSquare,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import Image from "next/image";

const articles = [
  {
    author: "Afan Khan",
    category: "JavaScript in Plain English",
    title: "Microsoft is ditching React",
    description: "Here’s why Microsoft considers React a mistake for Edge.",
    date: "Jun 6",
    views: "2K",
    comments: 45,
    image: "https://via.placeholder.com/150",
  },
  {
    author: "Andrew Zuo",
    category: "",
    title: "Google Doesn’t Appreciate Flutter",
    description:
      "Another day, another, “Is Google going to kill Flutter post?” It’s almost comical at this point:",
    date: "May 28",
    views: 538,
    comments: 18,
    image: "https://via.placeholder.com/150",
  },
  {
    author: "Awwweesssoooome",
    category: "JavaScript in Plain English",
    title: "A JavaScript Interview Question That 90% of People Get Wrong",
    description: "Let’s take a look at the question first:",
    date: "Mar 18",
    views: 876,
    comments: 18,
    image: "https://via.placeholder.com/150",
  },
  {
    author: "Jane Doe",
    category: "Web Development",
    title: "The Future of Web Development in 2024",
    description: "Predictions and trends to watch out for in web development.",
    date: "Jul 1",
    views: "1.5K",
    comments: 22,
    image: "https://via.placeholder.com/150",
  },
  {
    author: "John Smith",
    category: "Artificial Intelligence",
    title: "How AI is Transforming the Tech Industry",
    description: "A deep dive into the impact of AI on technology and beyond.",
    date: "Jun 20",
    views: "3K",
    comments: 35,
    image: "https://via.placeholder.com/150",
  },
  {
    author: "Emily Johnson",
    category: "Cybersecurity",
    title: "Top 10 Cybersecurity Threats in 2024",
    description: "Stay ahead of the curve with these cybersecurity insights.",
    date: "Jun 15",
    views: "1.2K",
    comments: 18,
    image: "https://via.placeholder.com/150",
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Header />
      <section className="h-screen bg-white w-full flex">
        <div className="container mx-auto flex flex-col md:flex-row h-full">
          <div className="w-full md:w-2/3 px-16 py-20 overflow-y-auto custom-scrollbar">
            {articles.map((article, index) => (
              <div key={index}>
                <div className="flex mb-8">
                  <div className="flex-grow">
                    <div className="flex items-center mb-2 text-sm">
                      <span className="">{article.author}</span>
                      {article.category && (
                        <>
                          <span className="mx-1">in</span>
                          <span className="">{article.category}</span>
                        </>
                      )}
                    </div>
                    <h2 className="text-2xl font-bold">{article.title}</h2>
                    <p className="text-gray-600">{article.description}</p>
                    <div className="flex items-center text-gray-500 mt-2">
                      <span className="mr-2 text-sm">
                        <Star className="inline-block w-4 h-4" /> {article.date}
                      </span>
                      <span className="mr-2 text-sm">
                        <Eye className="inline-block w-4 h-4" /> {article.views}
                      </span>
                      <span className="mr-2 text-sm">
                        <MessageSquare className="inline-block w-4 h-4" />{" "}
                        {article.comments}
                      </span>
                      <span className="mr-2 text-sm">
                        <Bookmark className="inline-block w-4 h-4" />
                      </span>
                      <span>
                        <MoreHorizontal className="inline-block" />
                      </span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={150}
                      height={150}
                    />
                  </div>
                </div>

                <div className="h-[0.5px] bg-gray-100 my-8 w-full"></div>
              </div>
            ))}
          </div>
          <div className="w-full md:w-1/3 border-l-[0.5px] border-gray-100 py-20 px-10 sticky top-0 h-screen">
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Staff Picks</h3>
              <ul>
                <li className="mb-2 text-sm">
                  Patricia Timmermans in ENGAGE <br />
                  <span className="font-bold">
                    Learning to Draw While Losing My Sight
                  </span>
                </li>
                <li className="mb-2 text-sm">
                  John Gorman <br />
                  <span className="font-bold">Stop Wasting Your Time</span>
                </li>
                <li className="mb-2 text-sm">
                  Connie Song in The Interstitial <br />
                  <span className="font-bold">Becoming a Poet</span>
                </li>
              </ul>
              <a href="#" className="text-green-600 text-sm">
                See the full list
              </a>
            </div>
            <div className="mb-8">
              <h3 className="font-semibold mb-4">Recommended topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Social Media",
                  "Mindfulness",
                  "AWS",
                  "Fitness",
                  "UX Design",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 text-sm"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <div className="h-3"></div>
              <a href="#" className="text-green-600 text-sm">
                See more topics
              </a>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Who to follow</h3>
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <Image
                    src="https://via.placeholder.com/50"
                    alt="Profile picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-2">
                    <span className="font-semibold">Liu Zuo Lin</span>
                    <br />
                    <span className="text-gray-500 text-sm">
                      101 Things I Never Knew About Python...
                    </span>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-1 rounded-full">
                  Follow
                </button>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <Image
                    src="https://via.placeholder.com/50"
                    alt="Profile picture"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div className="ml-2">
                    <span className="font-semibold">Reader Q.</span>
                    <br />
                    <span className="text-gray-500 text-sm">
                      Other interesting things...
                    </span>
                  </div>
                </div>
                <button className="bg-green-500 text-white px-4 py-1 rounded-full">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .custom-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
      `}</style>
    </main>
  );
}

'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useChat } from "ai/react"
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <Card className="w-[384px]">
      <CardHeader>
        <CardTitle>Chat AI</CardTitle>
        <CardDescription>Powered by Vercel SDK</CardDescription>
      </CardHeader>

      <CardContent className="">
        <ScrollArea className="h-[320px] w-full space-y-4">
          { messages.map((message) => {
            return (
              <div key={message.id} className="w-[360px] gap-3">
                { message.role === 'user' && (
                  <div className="bg-slate-100 border-slate-200 justify-center items-end border rounded-md p-2 mb-2">
                    <p className="leading-relaxed">
                      { message.content }
                    </p>
                  </div>
                ) }
                
                { message.role === 'assistant' && (
                  <>
                    <div className="bg-slate-100 border-slate-200 justify-center items-end border rounded-md p-2 mb-2">
                      <p className="leading-relaxed flex flex-col">
                        <span className="text-xs mb-2">Answer</span>
                        { message.content }
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs mb-2">This Answer help you?</span>
                      <Button className="border border-slate-200 bg-slate-100 hover:bg-slate-200">👍</Button>
                      <Button className="border border-slate-200 bg-slate-100 hover:bg-slate-200">👎</Button>
                    </div>
                  </>
                ) }
              </div>
            )
          }) }
        </ScrollArea>
      </CardContent>
      
      
      <CardFooter>
        <form onSubmit={handleSubmit} className="flex w-full gap-3 space-x-2">
          <Input placeholder="Send a message..." value={input} onChange={handleInputChange} />
          <Button type="submit">Send</Button>
        </form>
      </CardFooter>
    </Card>
  )
}
import { surpriseMePrompts } from "@/constants";

export function getRandomPrompts(prompt: string){
    const randomPromptIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt  = surpriseMePrompts[randomPromptIndex];
    if(randomPrompt === prompt) return getRandomPrompts(prompt);
    return randomPrompt;

}
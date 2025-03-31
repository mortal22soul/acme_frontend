"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  rating: z.number().int().min(1, "Rating must be at least 1."),
  title: z.string().min(2, "Title must be at least 2 characters.").optional(),
  comment: z
    .string()
    .min(2, "Comment must be at least 2 characters.")
    .optional(),
});

export default function CreateReview() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 1, // Default value should be at least 1
      title: "",
      comment: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data: ", data);
  };

  return (
    <div className="max-xl mx-auto shadow-md rounded-lg p-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Rating Input */}
          <FormField
            control={form.control}
            name="rating"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Rating</FormLabel>
                <FormControl>
                  <RadioGroup
                    value={field.value}
                    onValueChange={field.onChange}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={1} id="rating-1" />
                      <Label htmlFor="rating-1">1</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={2} id="rating-2" />
                      <Label htmlFor="rating-2">2</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={3} id="rating-3" />
                      <Label htmlFor="rating-3">3</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={4} id="rating-4" />
                      <Label htmlFor="rating-4">4</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value={5} id="rating-5" />
                      <Label htmlFor="rating-5">5</Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Title Input */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Enter title ..." {...field} />
                </FormControl>
                <FormMessage />
                <FormDescription>Enter Review Title</FormDescription>
              </FormItem>
            )}
          />

          {/* Comment Input */}
          <FormField
            control={form.control}
            name="comment"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Comment</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter comment ..."
                    {...field}
                    onChange={(e) => field.onChange(e.target.value)}
                    className="h-24"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Enter Comment</FormDescription>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}

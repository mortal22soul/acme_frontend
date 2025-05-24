"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useParams } from "next/navigation";

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
  title: z.string().min(2, "Title must be at least 2 characters."),
  comment: z.string().min(2, "Comment must be at least 2 characters."),
});

export default function CreateReview() {
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(
    null
  );
  const [submitError, setSubmitError] = useState<string | null>(null);
  const params = useParams();

  const tripId = Number(params?.id);
  const customerId = Number(params?.customerId) ?? 1;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      rating: 1,
      title: "",
      comment: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setSubmitStatus(null);
    setSubmitError(null);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/reviews`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, tripId, customerId }),
        }
      );
      if (!response.ok) throw new Error("Failed to submit review");
      await response.json();
      setSubmitStatus("success");
      form.reset();
    } catch (err: unknown) {
      setSubmitStatus("error");
      if (err instanceof Error) {
        setSubmitError(err.message || "Something went wrong.");
      } else {
        setSubmitError("Something went wrong.");
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto shadow-md rounded-lg p-6 bg-white/80">
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
                    value={String(field.value)}
                    onValueChange={(val) => field.onChange(Number(val))}
                    className="flex flex-row gap-4">
                    {[1, 2, 3, 4, 5].map((num) => (
                      <div className="flex items-center space-x-2" key={num}>
                        <RadioGroupItem
                          value={String(num)}
                          id={`rating-${num}`}
                        />
                        <Label htmlFor={`rating-${num}`}>{num}</Label>
                      </div>
                    ))}
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

          {/* Feedback */}
          {submitStatus === "success" && (
            <div className="text-green-600 text-center">
              Review submitted successfully!
            </div>
          )}
          {submitStatus === "error" && (
            <div className="text-red-600 text-center">
              {submitError || "Failed to submit review."}
            </div>
          )}
        </form>
      </Form>
    </div>
  );
}

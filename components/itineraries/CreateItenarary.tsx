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

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  day: z.number().int().min(1, "Day must be at least 1."),
  activity: z.string().min(2, "Activity must be at least 2 characters."),
});

export default function CreateItinerary() {
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const params = useParams();

  const tripId = Number(params?.id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      day: 1,
      activity: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setSubmitStatus(null);
    setSubmitError(null);
    try {
      const response = await fetch("http://localhost:3000/itineraries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, tripId }),
      });
      if (!response.ok) throw new Error("Failed to submit itinerary");
      await response.json();
      setSubmitStatus("success");
      form.reset();
    } catch (err: any) {
      setSubmitStatus("error");
      setSubmitError(err.message || "Something went wrong.");
    }
  };

  return (
    <div className="max-w-xl mx-auto shadow-md rounded-lg p-6 bg-white/80">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Day Input */}
          <FormField
            control={form.control}
            name="day"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Day</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    placeholder="Enter day number ..."
                    {...field}
                    onChange={e => field.onChange(Number(e.target.value))}
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Enter the day number for this activity.</FormDescription>
              </FormItem>
            )}
          />

          {/* Activity Input */}
          <FormField
            control={form.control}
            name="activity"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Describe the activity ..."
                    {...field}
                    onChange={e => field.onChange(e.target.value)}
                    className="h-24"
                  />
                </FormControl>
                <FormMessage />
                <FormDescription>Describe the activity for this day.</FormDescription>
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button type="submit" className="w-full">
            Add Itinerary
          </Button>

          {/* Feedback */}
          {submitStatus === "success" && (
            <div className="text-green-600 text-center">Itinerary added successfully!</div>
          )}
          {submitStatus === "error" && (
            <div className="text-red-600 text-center">{submitError || "Failed to add itinerary."}</div>
          )}
        </form>
      </Form>
    </div>
  );
}

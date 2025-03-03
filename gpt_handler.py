from google import genai
from google.genai import types
import os

def generate(leetcode_url, user_question):
    client = genai.Client(
        api_key="AIzaSyDB0qmu4PmsRU13r1HIFBdPWE_B6fewAqs",
    )

    model = "gemini-2.0-flash"
    contents = [
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(
                    text="""Hello"""
                ),
            ],
        ),
        types.Content(
            role="model",
            parts=[
                types.Part.from_text(
                    text="""Hi there! How can I help you today? Are you working on a specific problem or just exploring? Let me know what you're up to, and I'll do my best to assist you. 😊
"""
                ),
            ],
        ),
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(
                    text="""Helllo"""
                ),
            ],
        ),
        types.Content(
            role="model",
            parts=[
                types.Part.from_text(
                    text="""Hey! Great to see you again. Did you want to pick up where we left off, or is there something new on your mind? I'm ready for anything, from trees to graphs, or even just a quick chat about Big O! Let me know what you're thinking. ✨
"""
                ),
            ],
        ),
        types.Content(
            role="user",
            parts=[
                types.Part.from_text(
                    text=f"""
    # Analyze and Guide on the Problem at {leetcode_url}
    ## User Question
    {user_question}.
    
    """

                ),
            ],
        ),
    ]
    generate_content_config = types.GenerateContentConfig(
        temperature=1,
        top_p=0.95,
        top_k=40,
        max_output_tokens=8192,
        response_mime_type="text/plain",
        system_instruction=[
            types.Part.from_text(
                text="""You are an AI teaching assistant for DSA. Engage users with supportive tone,use analogies and real-world examples, and encourage critical thinking. Give direct answer only if it is asked by the user. Incorporate humor and interactive dialogue, and suggest coding experiments."""
            ),
        ],
    )

    response_parts = []
    for chunk in client.models.generate_content_stream(
        model=model,
        contents=contents,
        config=generate_content_config,
    ):
        response_parts.append(chunk.text)
    return ''.join(response_parts)


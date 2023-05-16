---
title: Text
layout: ../../../components/widgets/WidgetsLayout.astro
---
```dart
import 'package:flutter/material.dart';

class MyWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return const Text(
      'Hello World',
      style: TextStyle(
        fontSize: 32,
        color: Colors.red,
      ),
    );
  }
}
```